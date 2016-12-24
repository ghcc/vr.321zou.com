$(function () {
    changePic();
    //SetEmailVal();
    $("#leaveword").submit(function () {
        if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test($("#txtemail").val()) == false) {
            alert("邮箱格式不正确，请重新填写");
        } else {
            if ($(this).valid()) {
                $.ajax({
                    //cache: false,

                    url: "/CompareValidCode",
                    data: { validCode: $("#txtcode").val(), sval: "lyyz" },
                    dataType: "json",
                    type: 'post',
                    success: function (data) {
                        if (data) {
                            $("#leaveword").ajaxSubmit({
                                url: "/InsertLeaveWord",
                                dataType: "json",
                                type: "post",
                                success: function (data) {
                                    if (data.isSuccess) {
                                        alert(data.successMsg);
                                        changePic();
                                        cancel();
                                    } else {
                                        alert(data.errorMsg);
                                        changePic();
                                        return;
                                    }
                                },
                                error: function (XmlHttpRequest, textStatus, errorThrown) {
                                    changePic();
                                    alert('提交失败,标题或内容过长');
                                }
                            });
                        } else {
                            alert('验证码错误!');
                            changePic();
                        }
                    },
                    error: function (e) {
                        alert(e);
                    }
                });
            }
        }
        return false;
    });
});

function SetEmailVal() {
    $.ajax({
        cache: false,
        url: "/Customer/GetCustomerEmail",
        dataType: "json",
        type: 'post',
        success: function (data) {
            if (data != "")
            {
                $("#txtemail").val(data);
            }
        }
    });
}

function changePic() {
    var path = '/Customer/GenerateValidCode' + "?time=" + (new Date()).toLocaleTimeString() + "&sval=lyyz";
    $("#vpic").attr("src", path);
}

function cancel() {
    $("#leaveword").find(".u_textarea").val("");
    $("#leaveword").find(".u_input").val("");
    $("#leaveword").find("#leaveword_title").val('');
    $("#leaveword").find("#leaveword_content").val('');
    $("#leaveword").find("#txtemail").val('');
    $("#leaveword").find("#txtcode").val('');
    
}