import { Link } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import NumberField from "../Components/NumberField";
import RadioField from "../Components/RadioField";
import TextField from "../Components/TextField";
import CalcularTe from "./assets/js/CalcularTe";

function TeForm() {
    return (
        <div className="container mt-5 pt-5" data-aos="fade-up">
            <div className="d-flex align-items-center justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between m-0">
                            <div></div>
                            <h4 className="user-select-none m-0 ms-4 text-center">
                                Desenvolvimento de Te's
                            </h4>

                            <div className="justify-self-end me-2">
                                <Link type="button" className="btn-close" aria-label="Close" to={Routes.home} />
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="row m-0 mt-2">
                                    <div className="col-md-12 d-flex justify-content-around">
                                        <div className="col-md-6 d-flex justify-content-center"><RadioField name='reducao' value='concentrica' id='concentrica' title='Concêntrica' defaultChecked={true} onChange={CalcularTe} /></div>
                                        <div className="col-md-6 d-flex justify-content-center"><RadioField name='reducao' value='excentrica' id='excentrica' title='Excêntrica' onChange={CalcularTe} disabled={true}/></div>
                                    </div>
                                </div>

                                <div className="row m-0 mt-2">
                                    <div className="col-md-12 d-flex justify-content-around">
                                        <div className="col-md-6 d-flex justify-content-center"><RadioField name='aco' value='inox' id='acoInox' title='Inox' defaultChecked={true} onChange={CalcularTe} /></div>
                                        <div className="col-md-6 d-flex justify-content-center"><RadioField name='aco' value='carbono' id='acoCarbono' title='Carbono' onChange={CalcularTe} /></div>
                                    </div>
                                </div>

                                <div className="row m-0 mt-3 d-flex">
                                    <div className="col-md-12 row m-0 p-0">
                                        <div className="col-md-6"><NumberField id='bocaMaior' placeholder='Boca Maior' onKeyUp={CalcularTe} /></div>
                                        <div className="col-md-6"><NumberField id='bocaMenor' placeholder='Boca Menor' onKeyUp={CalcularTe} /></div>
                                    </div>
                                    <div className="col-md-12 row m-0 p-0">
                                        <div className="col-md-6"><NumberField id='espessura' placeholder='Espessura' onKeyUp={CalcularTe} /></div>
                                        <div className="col-md-6"><NumberField id='altura' placeholder='Altura' onKeyUp={CalcularTe} /></div>
                                    </div>
                                </div>

                                <div className="row m-0 mt-3">
                                    <div className="col-md-12">
                                        <hr />
                                    </div>
                                </div>

                                <div className="row m-0 mt-3">
                                    <div className="col-md-6">
                                        <TextField id='pesoLiquido' placeholder='Peso Líquido' readOnly={true} />
                                    </div>

                                    <div className="col-md-6">
                                        <TextField id='pesoBruto' placeholder='Peso Bruto' readOnly={true} />
                                    </div>
                                </div>

                                <div className="row m-0 mt-3">
                                    <div className="col-md-12">
                                        <hr />
                                    </div>
                                </div>

                                <div className="row m-0">
                                    <div className="col-md-4">
                                        <TextField id='area' placeholder='Área' readOnly={true} />
                                    </div>

                                    <div className="col-md-4">
                                        <TextField id='largura' placeholder='Largura' readOnly={true} />
                                    </div>

                                    <div className="col-md-4">
                                        <TextField id='comprimento' placeholder='Comprimento' readOnly={true} />
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

export default TeForm;