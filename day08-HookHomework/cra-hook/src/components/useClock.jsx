import React, {useState} from "react";

export default function useClock(){
    const [time, setTime] = useState();
    const [ampm, setAmPM] = useState();

    const updateTime = function () {
        let dateInfo = new Date();
        let hour = 0;

        //lay gia tri gio
        if (dateInfo.getHours()===0){
            hour = 12;
        } else if (dateInfo.getHours()>12){
            hour = dateInfo.getHours() - 12;
        } else {
            hour = dateInfo.getHours()
        }
        //lay gia tri minute

        let minutes = dateInfo.getMinutes() < 10 ? parseInt('0' + dateInfo.getMinutes()) : dateInfo.getMinutes();

        // lay seconds

        let seconds = dateInfo.getSeconds() < 10 ? '0' + dateInfo.getSeconds() : dateInfo.getSeconds()

        // dinh dang day
        let ampm = dateInfo.getHours() >= 12 ? 'AM' : 'PM'

        // cap nhat state

        setAmPM(ampm);
        setTime(`${hour}:${minutes}:${seconds}`)
    }
    setInterval(function () {
        updateTime()
    }, 1000)
    return [time, ampm]
}