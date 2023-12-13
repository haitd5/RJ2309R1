import React, { useState } from "react";
import SuccessAlert from "../Alert/SuccessAlert";
import { toast } from "react-toastify";

function PlayListApp() {
    const [playList, setPlayList] = useState(["con mua ngang qua", "nang am xa dan", "hoai thuong"]);

    const [music, setMusic] = useState();

    const [newMusic, setNewMusic] = useState();

    // const [showAlert, setShowAlert] = useState(false);

    const handleAddMusic = (e) => {
        e.preventDefault();
        setPlayList([...playList, music]);
        setMusic("");
        // setShowAlert(true);
        toast.info("Music updated successfully", { position: "bottom-right" });
    };

    const [selectIndex, setSelectIndex] = useState(-1);

    const handleUpdateMusic = (idx) => {
        if (newMusic) {
            playList[idx] = newMusic;
        }
        setSelectIndex(-1);
        setNewMusic();
        setPlayList(playList);
        // setShowAlert(true);
        toast.info("Music updated successfully", { autoClose: 4000 });
    };
    const handleCancelMusic = () => {
        setSelectIndex(-1);
        setNewMusic();
    };
    const handleRemoveMusic = (idx, music) => {
        // alert(`${idx} ${music}`);
        // let newPlayList = playList.filter((item, index) => index !== idx);
        // setPlayList(newPlayList);
        let confirm = window.confirm(`Are you sure to remove music ${music}`);
        if (confirm) {
            setPlayList((prev) => {
                let newPlayList = prev.filter((item, index) => index !== idx);
                return newPlayList;
            });
        }
    };

    return (
        <div className="container mt-3">
            <h1 className="display-6 text-warning fw-bolder">
                Playlist Music
                <i className="fa-solid fa-music ms-2"></i>
            </h1>
            {/* {<SuccessAlert showAlert={showAlert} setShowAlert={setShowAlert} content="them thanh cong" />} */}

            <form onSubmit={handleAddMusic} className="w-75">
                <div className="form-group d-flex">
                    <input
                        type="text"
                        className="form-control w-50 me-1"
                        required
                        value={music}
                        onInput={(e) => setMusic(e.target.value)}
                    />
                    <span className="d-inline-block" data-toggle="tooltip" title="Add music">
                        <button type="submit" className="btn btn-primary btn-sm">
                            <i className="fa-solid fa-plus me-2"></i>
                            Add to playlist
                        </button>
                    </span>
                </div>
            </form>
            <div className="w-50 mt-3">
                <ul className="list-group">
                    {playList.map((music, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {selectIndex === index ? (
                                <input
                                    className="form-control"
                                    value={newMusic || music}
                                    onInput={(e) => setNewMusic(e.target.value)}
                                />
                            ) : (
                                music
                            )}
                            <div className="d-flex">
                                {selectIndex === index ? (
                                    <>
                                        <span className="d-inline-block" data-toggle="tooltip" title="Save music">
                                            <i
                                                role="button"
                                                className="fa-solid fa-floppy-disk text-warning me-3"
                                                onClick={() => handleUpdateMusic(index)}
                                            />
                                        </span>
                                        <span className="d-inline-block" data-toggle="tooltip" title="Cancel music">
                                            <i
                                                role="button"
                                                className="fa-solid fa-rectangle-xmark text-dark"
                                                onClick={handleCancelMusic}
                                            />
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <span className="d-inline-block" data-toggle="tooltip" title="Edit music">
                                            <i
                                                role="button"
                                                className="fa-solid fa-pen-to-square text-success me-3"
                                                onClick={() => setSelectIndex(index)}
                                            />
                                        </span>
                                        <span className="d-inline-block" data-toggle="tooltip" title="Delete music">
                                            <i
                                                role="button"
                                                className="fa-solid fa-trash text-danger"
                                                onClick={() => handleRemoveMusic(index, music)}
                                            />
                                        </span>
                                    </>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default PlayListApp;
