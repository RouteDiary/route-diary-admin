$(() => {
  let url = `${backPath}/admin/login`;
  let $form = $("form.loginForm");
  $form.submit(() => {
    var adminId = $("input[name=login]").val();
    var adminPwd = $("input[name=pwd]").val();

    var loginData = { adminId: adminId, adminPwd: adminPwd };
    $.ajax({
      url: url,
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(loginData),

      success: () => {
        alert("로그인 성공");
        // location.href = "/front/html/a_index.html";
        window.location.href = "a_index.html";
      },

      error: (jqXHR) => {
      if (jqXHR.status == 500) {
        alert("서버 오류 : " + jqXHR.status);
      } else {
        alert(jqXHR.status + "오류 : " + jqXHR.responseJSON.message);
      }
      },
    });
    return false;
  });
});
