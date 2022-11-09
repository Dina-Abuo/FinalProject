import React from 'react';
import './view.css'
export default function Workplse() {
    return (
        <>
            <form className='mt-3'>
                <div className="mb-3">
                    <input type="text" className="form-control p-3" id="Company" placeholder='Company' />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control p-3" id="Position" placeholder='Position' />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control p-3" id="City" placeholder='City/Town' />
                </div>
                <div className="pb-5 mb-3 form-check border-bottom ">
                    <input type="checkbox" className="form-check-input" id="Check1" />
                    <label className="form-check-label">I currently work here</label>
                </div>
                <div className='d-flex justify-content-between'>
                    <div>
                        <button className="btn btn-secondary">Piblic</button>
                    </div>
                    <div>
                        <button className="btn btn-secondary  me-2"> cancel </button>
                        <button type="submit" className="btn btn-primary"  >Save</button>
                    </div>
                </div>
            </form>
        </>
    )
}
