import React from 'react';

function FormRegister() {
    return (
        <section>
            <form className="row">
                <div className="col-md-4">
                    <h3 className="display-6 fw-bolder mb-4">Let us know about yourquery</h3>
                    <p>
                        Fill out the form provided and we'll be in touch within 48 hours. Also check out our{' '}
                        <a href="#!">Contact us </a>page for more options.
                    </p>
                </div>
                <div className="col-md-8">
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="First name*"></input>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Last name*"></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <input type="email" className="form-control" placeholder="Email*"></input>
                        </div>
                        <div className="col-md-6">
                            <input type="number" className="form-control" placeholder="Telephone number*"></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <input type="text" className="form-control" placeholder="Company Name"></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <textarea
                                className="form-control"
                                cols="30"
                                rows="10"
                                placeholder="Let us know more about yourquery"
                            ></textarea>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <p>*you must provide these details to sumit the form</p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12 form-check">
                            <input type="checkbox" className="form-check-input"></input>
                            <label className="form-check-label">
                                Laborum quis pariatur elit duis elit irure aliquip non deserunt consequat.
                            </label>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12 text-end">
                            <button className="btn btn-secondary btn-lg">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default FormRegister;
