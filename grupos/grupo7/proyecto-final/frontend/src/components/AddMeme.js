import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import ImageUploading from "react-images-uploading";
import isAuthenticated from "../lib/isAuthenticated";

const maxNumber = 10;
const maxMbFileSize = 5 * 1024 * 1024; // 5Mb

function AddMeme(usuario) {
  const [memeGuardado, setMemeGuardado] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("Arte");
  const [images, setImages] = useState([]);
  const [imagen, setImagen] = useState(null);
  const [loggedin] = useState(isAuthenticated());
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    cargarCategorias();
  }, []);

  const cargarCategorias = () => {
    const options = {
      url: process.env.REACT_APP_API_URL + "categorias",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    axios(options)
      .then((response) => {
        if (response.status === 200) {
          setCategorias(response.data.categorias);
        } else {
          setMensaje("Problema cargando las categorias");
        }
      })
      .catch((e) => {
        setMensaje("Problema cargando las categorias");
      });
  };

  const handleGuardarOnClick = () => {
    if (!titulo) {
      setMensaje("Ingrese el titulo del meme");
      return false;
    }
    if (!imagen) {
      setMensaje("Seleccione una imagen Meme");
      return false;
    }

    if (mensaje === "") {
      const data = new FormData();
      data.append("titulo", titulo);
      data.append("categoria", categoria);
      data.append("usuario", loggedin);
      data.append("uploadFile", imagen);

      const token = localStorage.getItem("mymemejs_jwt");

      axios
        .post(process.env.REACT_APP_API_URL + "memes", data, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          if (res.data.result) {
            setMemeGuardado(true);
          } else {
            setMensaje(
              "UPS! Ocurrió un problema guardando su meme. Por favor intente en unos minutos..."
            );
          }
        })
        .catch((err) =>
          setMensaje(
            "UPS! Ocurrió un problema guardando su meme. Por favor intente en unos minutos..."
          )
        );
    }
  };

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  };

  const handleCategoriaChange = (e) => {
    setCategoria(e.target.value);
  };

  const onImageChange = (imageList, addUpdateIndex) => {
    setImages(imageList);

    let im = null;
    imageList.forEach((file, i) => {
      im = file.file;
    });
    if (im) setImagen(im);
  };

  const onImageError = (errors, files) => {
    setMensaje("Error subiendo la imagen");
  };

  if (memeGuardado) {
    return <Redirect to="/login"></Redirect>;
  }

  if (!loggedin || loggedin === "") {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: "/addmeme" },
        }}
      />
    );
  } else {
    return (
      <ImageUploading
        value={images}
        onChange={onImageChange}
        maxNumber={maxNumber}
        maxFileSize={maxMbFileSize}
        onError={onImageError}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          dragProps,
        }) => (
          <div>
            {mensaje !== "" && (
              <div
                className="alert alert-warning alert-dismissible"
                role="alert"
              >
                {mensaje}
              </div>
            )}
            <div className="form-group">
              <label htmlFor="txtTitulo">Titulo</label>
              <input
                id="txtTitulo"
                type="text"
                name="titulo"
                maxLength="100"
                value={titulo}
                onChange={handleTituloChange}
                className={"form-control" + (titulo ? "" : " is-invalid")}
              />
              <div className="invalid-feedback">Ingrese un titulo!</div>
            </div>
            <div className="form-group">
              <label htmlFor="lstCategoria">Categoria</label>
              <select
                name="categorias"
                className="form-control"
                value={categoria}
                onChange={handleCategoriaChange}
              >
                {categorias.map((cat) => (
                  <option key={cat._id} value={cat.nombre}>
                    {cat.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="lstCategoria">Meme</label>
              {imageList.length === 0 && (
                <>
                  <br />
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Buscar Meme
                  </button>
                </>
              )}

              {imageList.map((image, index) => (
                <div key={index}>
                  <div>
                    <img src={image.data_url} alt="" width="200" />
                  </div>
                  <div>
                    <button
                      className="btn btn-secondary mt-2 mr-3"
                      onClick={() => onImageUpdate(index)}
                    >
                      Cambiar
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <button
                className="btn btn-primary mt-3"
                onClick={handleGuardarOnClick}
              >
                Guardar
              </button>
            </div>
          </div>
        )}
      </ImageUploading>
    );
  }
}

export default AddMeme;
