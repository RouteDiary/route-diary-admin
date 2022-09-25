$(() => {
  let url = `${backPath}/admin/logout`;
  $.ajax({
    url: url,
    method: "GET",

    success: () => {
      location.href = "a_index.html";
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
