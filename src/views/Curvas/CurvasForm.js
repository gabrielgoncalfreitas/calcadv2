import { Link } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import NumberField from "../Components/NumberField";
import RadioField from "../Components/RadioField";

function CurvasForm() {
    return (
        <div className="container" data-aos="fade-up">
            <div className="d-flex align-items-center justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between m-0">
                            <div></div>
                            <h4 className="user-select-none m-0 ms-4">
                                Desenvolvimento de Curvas
                            </h4>

                            <div class="justify-self-end me-2">
                                <Link type="button" class="btn-close" aria-label="Close" to={Routes.home} />
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="row m-0">
                                    <div className="col-md-12 d-flex justify-content-around">
                                        <RadioField name='flexRadioCurva' id='flexRadioCurva90' title='90°' checked={true} />
                                        <RadioField name='flexRadioCurva' id='flexRadioCurva45' title='45°' />
                                        <RadioField name='flexRadioCurva' id='flexRadioCurva30' title='30°' />
                                    </div>
                                </div>

                                <div className="row m-0 mt-2">
                                    <div className="col-md-12 d-flex justify-content-around">
                                        <RadioField name='flexRadioCurvaAco' id='flexRadioCurvaAcoInox' title='Inox' checked={true} />
                                        <RadioField name='flexRadioCurvaAco' id='flexRadioCurvaAcoCarbono' title='Carbono' />
                                    </div>
                                </div>

                                <div className="row m-0 mt-3">
                                    <div className="col-md-12">
                                        <NumberField id='floatingDn' placeholder='D.N.' />
                                        <NumberField id='floatingEspessura' placeholder='Espessura' />

                                        <div className="row m-0 mt-3">
                                            <button type="button" className="btn btn-outline-primary">Calcular</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="row m-0 mt-3">
                                    <div className="col-md-12">
                                        <hr />
                                    </div>
                                </div>

                                <div className="row m-0 mt-3">
                                    <div className="col-md-6">
                                        <NumberField id='floatingPesoLiquido' placeholder='Peso Líquido' readOnly={true} />
                                    </div>

                                    <div className="col-md-6">
                                        <NumberField id='floatingPesoBruto' placeholder='Peso Bruto' readOnly={true} />
                                    </div>
                                </div>

                                <div className="row m-0 mt-3">
                                    <div className="col-md-12">
                                        <hr />
                                    </div>
                                </div>

                                <div className="row m-0">
                                    <div className="col-md-6">
                                        <NumberField id='floatingArea' placeholder='Área' readOnly={true} />
                                    </div>

                                    <div className="col-md-6">
                                        <NumberField id='floatingAltura' placeholder='Altura' readOnly={true} />
                                    </div>

                                    <div className="col-md-6">
                                        <NumberField id='floatingLargura' placeholder='Largura' readOnly={true} />
                                    </div>

                                    <div className="col-md-6">
                                        <NumberField id='floatingComprimento' placeholder='Comprimento' readOnly={true} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurvasForm;