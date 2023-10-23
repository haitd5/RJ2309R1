import React from "react";

function SuccessAlert(props) {
    const { showAlert, setShowAlert, content } = props;
    return (
        <>
            {showAlert && (
                <div className="alert alert-success d-flex justify-content-between aligin-items-center" role="alert">
                    {content || "Login Success"}
                    <span
                        role="button"
                        className="text-dark fs-5 fw-bolder"
                        onClick={() => {
                            setShowAlert(false);
                        }}
                    >
                        &times;
                    </span>
                </div>
            )}
        </>
    );
}
export default SuccessAlert;
