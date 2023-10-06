function fetchData() {
    const url = document.getElementById("urlInput").value;
  
    axios.get(url)
      .then(function (response) {
        const data = response.data;
        const table = generateTableHTML(data);
        document.getElementById("tableContainer").innerHTML = table;
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
  }
  
  function generateTableHTML(data) {
    let html = "<table><tr>";
    for (let key in data[0]) {
      html += "<th>" + key + "</th>";
    }
    html += "</tr>";
    for (let row of data) {
      html += "<tr>";
      for (let key in row) {
        html += "<td>" + row[key] + "</td>";
      }
      html += "</tr>";
    }
    return html + "</table>";
  }
  