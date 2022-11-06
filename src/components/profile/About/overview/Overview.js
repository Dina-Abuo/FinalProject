import React, { useState } from 'react'
import './view.css'



export default function Overview() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className=' d-flex p-3'>
        <div className='iconPlus d-flex me-2 '><i class="fa-solid fa-plus "></i></div>
        <button className=' btun-Show' onClick={handleClose}>Add Workplse  </button>
      </div>
      <form className='mt-3'>
        <div class="mb-3">
          <input type="text" class="form-control p-3" id="Company" placeholder='Company' />
        </div>
        <div class="mb-3">
          <input type="text" class="form-control p-3" id="Position" placeholder='Position' />
        </div>
        <div class="mb-3">
          <input type="text" class="form-control p-3" id="City" placeholder='City/Town' />
        </div>
        <div class="pb-5 mb-3 form-check border-bottom ">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">I currently work here</label>
        </div>
        <div className='d-flex justify-content-between'>
          <div>
            <button class="btn btn-secondary">Piblic</button>
          </div>
          <div>
            <button class="btn btn-secondary  me-2">cancel</button>
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </div>
      </form>

      {/* ******************************** form 2*********************************** */}

      <div className=' d-flex p-3'>
        <div className='iconPlus d-flex me-2 '><i class="fa-solid fa-plus "></i></div>
        <button className=' btun-Show' onClick={handleClose}>Add high school </button>
      </div>
      <form className='mt-3'>
        <div class="mb-3">
          <input type="text" class="form-control p-3" id="exampleInputPassword1" placeholder='School' />
        </div>
        <div class="pb-5 mb-3 form-check border-bottom ">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Graduated</label>
        </div>
        <div className='d-flex justify-content-between'>
          <div>
            <button class="btn btn-secondary">Piblic</button>
          </div>
          <div>
            <button class="btn btn-secondary  me-2">cancel</button>
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </div>
      </form>


      {/* ******************************** form 2*********************************** */}

      <div className=' d-flex p-3'>
        <div className='iconPlus d-flex me-2 '><i class="fa-solid fa-plus "></i></div>
        <button className=' btun-Show' onClick={handleClose}>Add college  </button>
      </div>
      <form className='mt-3'>
        <div class="mb-3">
          <input type="text" class="form-control p-3" id="School" placeholder='School' />
        </div>
        <div class="pb-3 mb-3 form-check ">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Graduated</label>
        </div>
        <div class="mb-3">
          <label class="form-check-label" for="Concentration">Concentrations</label>
          <input type="text" class="form-control p-3" id="Concentration" placeholder='Concentration' />
        </div>
        <div class="mb-3">
          <input type="text" class="form-control p-3" id="Concentration" placeholder='Concentration' />
        </div>
        <div class="mb-3">
          <input type="text" class="form-control p-3" id="Concentration" placeholder='Concentration' />
        </div>
        <div class="mb-3 pb-5 ">
          <input type="text" class="form-control p-3" id="Dgree" placeholder='Dgree' />
        </div>
        <div className='d-flex justify-content-between'>
          <div>
            <button class="btn btn-secondary">Piblic</button>
          </div>
          <div>
            <button class="btn btn-secondary  me-2">cancel</button>
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
    </>
  )
}
