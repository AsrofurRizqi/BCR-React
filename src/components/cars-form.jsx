import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import React from 'react'
import { setFilter } from '../reducers/cars'

const CarsForm = () => {
  const dispatch = useDispatch();
  const [driver, setDriver] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [waktu, setWaktu] = useState("");
  const [penumpang, setPenumpang] = useState("");
  const [data, setData] = useState({});
  
  useEffect(() => {
    dispatch(setFilter(data));
}, [dispatch, data])

const onClick = (e) => {
    e.preventDefault()
    setData({
        driver: driver,
        tanggal: tanggal,
        waktu: waktu,
        penumpang: penumpang,
    });
}
  
    return(
    <div className="container form-cars shadow-sm mx-auto">
        <div className="form-row">
            <div className="input mx-auto">
              <label>Tipe Driver</label>
              <select id="input-driver" className="form-control" style={{color: "#8A8A8A"}} required onChange={(e) => setDriver(e.target.value)} >
                <option className="isi-select" defaultValue>Pilih Tipe Driver</option>
                <option className="isi-select" value="true">Dengan Sopir</option>
                <option className="isi-select" value="false">Tanpa Sopir (Lepas Kunci)</option>
              </select>        
            </div>
            <div className="input mx-auto">
              <label>Tanggal</label>
              <input type="text" className="form-control" id="input-tanggal" onFocus={(e) => e.target.type = 'date'} placeholder="Pilih Tanggal" style={{color: "#8A8A8A"}} required onChange={(e) => setTanggal(e.target.value)} />
            </div>
            <div className="input mx-auto">
                <label>Waktu Jemput/Ambil</label>
                <select id="input-waktu" className="form-control icon-rtl" style={{color: "#8A8A8A"}} required onChange={(e) => setWaktu(e.target.value)} >
                  <option className="isi-select" defaultValue>Pilih Waktu</option>
                  <option className="isi-select" value="08:00:00">08.00&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;    WIB</option>
                  <option className="isi-select" value="09:00:00">09.00&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;    WIB</option>
                  <option className="isi-select" value="10:00:00">10.00&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;    WIB</option>
                  <option className="isi-select" value="11:00:00">11.00&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;    WIB</option>
                  <option className="isi-select" value="12:00:00">12.00&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;    WIB</option>
                </select> 
            </div>
            <div className="input mx-auto">
                <label>Jumlah Penumpang (optional)</label>
                <input type="number" className="form-control" id="input-penumpang" placeholder="Jumlah Penumpang" onChange={(e) => setPenumpang(e.target.value)}/>
            </div>
            <div className="btn-cari mx-auto">
                <label></label>
                <button className="btn btn-block btn-success" id="load-mobil" type="submit" onClick={onClick}>Cari Mobil</button>
            </div>
        </div>
    </div>
        )
}
export default CarsForm