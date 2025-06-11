function doGet(e) {
  return HtmlService.createHtmlOutputFromFile("index").setTitle("Formulir Pendaftaran").setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const folder = DriveApp.getFolderById("10S8R0mLhGawDYgtldKnGiGZQtCEZgulY");

    const makeFile = (base64, filename) => {
      const blob = Utilities.newBlob(Utilities.base64Decode(base64));
      blob.setName(filename);
      const file = folder.createFile(blob);
      return file.getUrl();
    };

    const kkLink = makeFile(data.kk, `KK_${data.nama}.jpg`);
    const aktaLink = makeFile(data.akta, `Akta_${data.nama}.jpg`);
    const raporLink = makeFile(data.rapor, `Rapor_${data.nama}.jpg`);


    fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
});


const makeFile = (base64, filename) => {
  if (!base64) return "";
  const blob = Utilities.newBlob(Utilities.base64Decode(base64));
  blob.setName(filename);
  const file = folder.createFile(blob);
  return file.getUrl();
};


DriveApp.getFolderById("10S8R0mLhGawDYgtldKnGiGZQtCEZgulY")
SpreadsheetApp.openById("17BbFoWkIZXU0ySveTXYiAq6EsQfxZiOh1VmawM9R0Ug").getSheetByName("Data")
return ContentService.createTextOutput(
  JSON.stringify({ status: "success", message: "✅ Data berhasil disimpan!" })
).setMimeType(ContentService.MimeType.JSON);
return ContentService.createTextOutput(
  JSON.stringify({ status: "error", message: "❌ Error: " + err.message })
).setMimeType(ContentService.MimeType.JSON);
catch (err) {
  Logger.log(err);  // ini bisa kamu lihat di Executions log
  return ContentService.createTextOutput("❌ Error: " + err.message);
}

    const sheet = SpreadsheetApp.openById("1bybB2V6f3q3XYIlFRnMf2kmg42r_OeMNC50Ybj1xj8Q").getSheetByName("Sheet1");
    sheet.appendRow([
      data.id,
      data.nama,
      data.nisn,
      data.asal,
      data.tgl_lahir,
      data.jenis_kelamin, // ✅ Tambahkan jenis kelamin
      data.kelas,
      data.hp,
      data.alamat,
      data.pesan || "", // ✅ Optional field (pesan)
      data.info, // ✅ Tambahkan sumber informasi
      data.ayah,
      data.kerja_ayah,
      data.ibu,
      data.kerja_ibu,
      kkLink,
      aktaLink,
      raporLink,
      new Date(),
    ]);

    return ContentService.createTextOutput("✅ Data berhasil disimpan!");
  } catch (err) {
    return ContentService.createTextOutput("❌ Error: " + err.message);
  }
}
