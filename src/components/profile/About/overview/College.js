import React from 'react';
import './view.css';
export default function College() {
    return (
        <>
            <form className='mt-3'>
                <div className="mb-3">
                    <input type="text" className="form-control p-3" id="School" placeholder='School' />
                </div>
                <div className="pb-3 mb-3 form-check ">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label">Graduated</label>
                </div>
                <div className="mb-3">
                    <label className="form-check-label" >Concentrations</label>
                    <input type="text" className="form-control p-3" id="Concentration" placeholder='Concentration' />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control p-3" id="Concentration1" placeholder='Concentration' />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control p-3" id="Concentration2" placeholder='Concentration' />
                </div>
                <div className="mb-3 pb-5 ">
                    <input type="text" className="form-control p-3" id="Dgree" placeholder='Dgree' />
                </div>
                <div className='d-flex justify-content-between'>
                    <div>
                        <button className="btn btn-secondary">Piblic</button>
                    </div>
                    <div>
                        <button className="btn btn-secondary  me-2">cancel</button>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </form>
        </>
    )
}
