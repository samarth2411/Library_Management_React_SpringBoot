export const Heros = () => {
    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-5">
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-left"></div>
                    </div>

                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>What have you been reading</h1>
                            <p className="lead">
                                The Library team would love to know what you have been reading,
                                Whether it is to learn a new skill or grow within one,
                                we will be able to provide the top content for you!

                            </p>
                            <a className="btn main-color btn-lg text-white" href="#">Sign up</a>

                        </div>
                    </div>

                </div>

                <div className="row r-0">
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>Our Collection is always changing!</h1>
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Esse sint officia minus earum reiciendis commodi veniam quas ipsa
                                fugiat? Quas eaque quibusdam, sit iure provident nulla totam dicta
                                aspernatur, autem repellat eligendi enim laudantium est ducimus.
                                Soluta iusto nisi eum neque explicabo, excepturi omnis accusantium maiores
                                voluptatum sed. Nemo, rem?

                            </p>

                        </div>

                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-right"></div>
                    </div>

                </div>
            </div>

            {/* Mobile Heros*/}

            <div className="d-lg-none">
                <div className="container">
                    <div className="m-2">
                        <div className="col-image-left"></div>
                        <div className="mt-2">
                            <h1>What have you been reading</h1>
                            <p className="lead">
                                The Library team would love to know what you have been reading,
                                Whether it is to learn a new skill or grow within one,
                                we will be able to provide the top content for you!

                            </p>
                            <a className="btn main-color btn-lg text-white" href="#">Sign up</a>

                        </div>

                    </div>

                    <div className="m-2">
                        <div className="col-image-right"></div>
                        <div className="mt-2">
                            <h1>Our Collection is always changing!</h1>
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Esse sint officia minus earum reiciendis commodi veniam quas ipsa
                                fugiat? Quas eaque quibusdam, sit iure provident nulla totam dicta
                                aspernatur, autem repellat eligendi enim laudantium est ducimus.
                                Soluta iusto nisi eum neque explicabo, excepturi omnis accusantium maiores
                                voluptatum sed. Nemo, rem?

                            </p>


                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}