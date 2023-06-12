function kiemTraRong(checkInput,idThongBao) {
    //check input đó được nhập hay không, nếu có thì true ngược lại thì false
    if(checkInput){
        document.getElementById(idThongBao).innerHTML ="";
        return true;
    }else{
        document.getElementById(idThongBao).innerHTML ="Vui lòng nhập trường dữ liệu này";
        document.getElementById(idThongBao).style.display ="inline-block"
        return false;
    }
}

function kiemTraEmail(checkInput,idThongBao) {
    //kiểm tra email bằng regex
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //sử dụng phương thức test để xem email nhập vào có phù hợp hay không, khi dùng test sẽ trả về true ỏ false
    var hopLe = regex.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML ="";
        return true;
    }
    else{
        document.getElementById(idThongBao).innerHTML ="Vui lòng nhập đúng email";
        document.getElementById(idThongBao).style.display ="inline-block"
        return false;
    }
}

function kiemTraTen(checkInput,idThongBao) {
    //kiểm tra email bằng regex
    var regex = /^[A-Za-z]+$/;
    //sử dụng phương thức test để xem email nhập vào có phù hợp hay không, khi dùng test sẽ trả về true ỏ false
    var hopLe = regex.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML ="";
        return true;
    }
    else{
        document.getElementById(idThongBao).innerHTML ="Vui lòng nhập đúng tên nhân viên không sử dụng tiếng Việt";
        document.getElementById(idThongBao).style.display ="inline-block"
        return false;
    }
}

function kiemDoDai(checkInput,idThongBao) {
    //check input đó được nhập hay không, nếu có thì true ngược lại thì false
    if(checkInput.length>=4 && checkInput.length<=6){
        document.getElementById(idThongBao).innerHTML ="";
        return true;
    }else{
        document.getElementById(idThongBao).innerHTML ="Độ dài tài khoản từ 4 đến 6";
        document.getElementById(idThongBao).style.display ="inline-block"
        return false;
    }
}


function kiemTraMatKhau(checkInput,idThongBao) {
    //kiểm tra email bằng regex
    //Tối thiểu sáu ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt:
    var regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    //sử dụng phương thức test để xem email nhập vào có phù hợp hay không, khi dùng test sẽ trả về true ỏ false
    var hopLe = regExp.test(checkInput);
        if (hopLe) {
            document.getElementById(idThongBao).innerHTML ="";  
            return true;
        }
        else{
            document.getElementById(idThongBao).innerHTML ="Vui lòng nhập đúng định dạng mật khẩu, độ dài tối thiểu 6 ký tự";
            document.getElementById(idThongBao).style.display ="inline-block"
            return false;
        }
    
}

