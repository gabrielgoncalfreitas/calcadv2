import { Link } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import NumberField from "../Components/NumberField";
import RadioField from "../Components/RadioField";
import TextField from "../Components/TextField";
import CalcularCurva from "./assets/js/CalcularCurva";

function CurvasForm() {
    return (
        <div className="container mt-5 pt-5" data-aos="fade-up">
            <div className="d-flex align-items-center justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between m-0">
                            <div></div>
                            <h4 className="user-select-none m-0 ms-4 text-center">
                                Desenvolvimento de Curvas
                            </h4>

                            <div className="justify-self-end me-2">
                                <Link type="button" className="btn-close" aria-label="Close" to={Routes.home} />
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="row m-0 mt-2">
                                    <div className="col-md-12 d-flex justify-content-around">
                                        <div className="col-md-4 d-flex justify-content-center"><RadioField name='curva' value='90' id='curva90' title='90°' defaultChecked={true} /></div>
                                        <div className="col-md-4 d-flex justify-content-center"><RadioField name='curva' value='45' id='curva45' title='45°' /></div>
                                        <div className="col-md-4 d-flex justify-content-center"><RadioField name='curva' value='30' id='curva30' title='30°' /></div>
                                    </div>
                                </div>

                                <div className="row m-0 mt-2">
                                    <div className="col-md-12 d-flex justify-content-around">
                                        <div className="col-md-6 d-flex justify-content-center"><RadioField name='raio' value='curto' id='raioCurto' title='Curto' defaultChecked={true} /></div>
                                        <div className="col-md-6 d-flex justify-content-center"><RadioField name='raio' value='longo' id='raioLongo' title='Longo' /></div>
                                    </div>
                                </div>

                                <div className="row m-0 mt-2">
                                    <div className="col-md-12 d-flex justify-content-around">
                                        <div className="col-md-6 d-flex justify-content-center"><RadioField name='aco' value='inox' id='acoInox' title='Inox' defaultChecked={true} /></div>
                                        <div className="col-md-6 d-flex justify-content-center"><RadioField name='aco' value='carbono' id='acoCarbono' title='Carbono' /></div>
                                    </div>
                                </div>

                                <div className="row m-0 mt-3">
                                    <div className="col-md-12">
                                        <NumberField id='floatingDn' placeholder='D.N.' />
                                        <NumberField id='floatingEspessura' placeholder='Espessura' />

                                        <div className="row m-0 mt-3">
                                            <button type="button" className="btn btn-outline-primary" onClick={CalcularCurva}>Calcular</button>
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
                                        <TextField id='floatingPesoLiquido' placeholder='Peso Líquido' readOnly={true} />
                                    </div>

                                    <div className="col-md-6">
                                        <TextField id='floatingPesoBruto' placeholder='Peso Bruto' readOnly={true} />
                                    </div>
                                </div>

                                <div className="row m-0 mt-3">
                                    <div className="col-md-12">
                                        <hr />
                                    </div>
                                </div>

                                <div className="row m-0">
                                    <div className="col-md-4">
                                        <TextField id='floatingArea' placeholder='Área' readOnly={true} />
                                    </div>

                                    <div className="col-md-4">
                                        <TextField id='floatingLargura' placeholder='Largura' readOnly={true} />
                                    </div>

                                    <div className="col-md-4">
                                        <TextField id='floatingComprimento' placeholder='Comprimento' readOnly={true} />
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