import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncData } from "../reducers/cars"
import Users from '../images/fi_users_2.png';
import Settings from '../images/fi_settings.png';
import Calendar from '../images/fi_calendar_2.png';

const Card = () => {
  const dispatch = useDispatch();

  const listCarsData = useSelector((state) => state.datas.cars)
  const filterparam = useSelector((state) => state.datas.filter)
  const FilteredCars = []

  listCarsData.map((car) => {
    let driver = (filterparam.driver === 'true')
    let dateConversion = new Date(car.availableAt)
    if (car.available === driver && dateConversion <= new Date(filterparam.tanggal) && car.capacity >= filterparam.penumpang
    ){
      FilteredCars.push(car)
    }
    return car;
})
  useEffect(() => {
    dispatch(getAsyncData());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  if(FilteredCars.length === 0 && filterparam.button === "clicked"){
    return(
      <div id="cars-container"  className="container row mx-auto">
        <div className="card mx-auto" style={{width: "18rem",backgroundColor: "#ffa1a1"}}>
       <div className="card-body">
         <h5 className="card-title text-center my-auto">Mobil Tidak Tersedia</h5>
       </div>
     </div>
    </div>
    )
  }else{
  return (
    <div id="cars-container"  className="container row mx-auto">
      {
      FilteredCars.map((data) => {
        const harga = data.rentPerDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return (
          <div className="col-md-4" key={data.id}>
            <div className="card mt-4 shadow-sm" style={{padding: "20px", borderRadius: "8px",width: "330px"}}>
            <img src={data.image} className="card-img-top mx-auto" alt={data.manufacture} style={{width: "270px",height: "160px"}}/>
            <div className="card-body p-0 mt-3">
              <h6 className="card-title" style={{fontWeight: "400"}}>{data.model} / {data.manufacture}</h6>
              <a href={() => false} className="text-weight-bold mt-3" style={{textDecoration: "none",color: "black",fontSize: "16px",fontWeight: "700"}}>Rp {harga} / hari</a>
              <p className="card-text mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href={() => false}><img src={Users} className="mr-2 icon-cars" alt="icon-users"/>{data.capacity} orang</a>
              <div className="mt-3">
                <a href={() => false}><img src={Settings} className="mr-2 icon-cars" alt="icon-setings"/>{data.transmission}</a>
              </div>
              <div className="mt-3 mb-3">
                <a href={() => false}><img src={Calendar} className="mr-2 icon-cars" alt="icon-calendar"/>Tahun {data.year}</a>
              </div>
            </div>
            <div className="card-footer d-grid p-0" style={{borderTop: "none"}}>
              <a href={() => false} className="btn btn-success btn-block" type="button" style={{backgroundColor: "#5CB85F",borderColor: "#5CB85F"}}>Pilih Mobil</a>
            </div>
          </div>
          </div>
        );
      })
      }
    </div>
  );
  }
};

export default Card;
