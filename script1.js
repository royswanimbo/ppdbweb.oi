function doPost(e) {
  try {
    const folderId = "1XgxhUDBcXHM1hYJP2cA2ICnuwpdpehl9"; // Folder Google Drive tujuan
    const sheetId = "1xlF6zwZpbkGQrcxihPzIzLpcrB8aU_Lv1dngfjsJ850";
    const sheetName = "formulir";

    const ss = SpreadsheetApp.openById(sheetId);
    const sheet = ss.getSheetByName(sheetName);
    const folder = DriveApp.getFolderById(folderId);

    const nama = e.parameter.nama || "Anonim";
    const nisn = e.parameter.nisn || "";
    const asal_sekolah = e.parameter.asal_sekolah || "";
    const tgl_lahir = e.parameter.tgl_lahir || "";
    const kelas_pilihan = e.parameter.kelas_pilihan || "";
    const nohp = e.parameter.nohp || "";
    const alamat = e.parameter.alamat || "";
    const nama_ayah = e.parameter.nama_ayah || "";
    const pekerjaan_ayah = e.parameter.pekerjaan_ayah || "";
    const nama_ibu = e.parameter.nama_ibu || "";
    const pekerjaan_ibu = e.parameter.pekerjaan_ibu || "";
    const info_dari = e.parameter.info_dari || "";

    const uploadedFiles = [];
    const fileKeys = ["file_kk", "file_akta", "file_raport"];

    fileKeys.forEach(function (key) {
      if (e.files && e.files[key]) {
        const fileBlob = e.files[key];
        const file = folder.createFile(fileBlob);
        file.setName(nama + "_FILE_" + key.toUpperCase());
        uploadedFiles.push(file.getUrl());
      } else {
        uploadedFiles.push("Tidak ada");
      }
    });

    sheet.appendRow([
      new Date(),
      nama,
      nisn,
      asal_sekolah,
      tgl_lahir,
      kelas_pilihan,
      nohp,
      alamat,
      nama_ayah,
      pekerjaan_ayah,
      nama_ibu,
      pekerjaan_ibu,
      info_dari,
      uploadedFiles[0], // KK
      uploadedFiles[1], // Akta
      uploadedFiles[2], // Raport
    ]);

    return ContentService.createTextOutput("Pendaftaran berhasil!").setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err.message).setMimeType(ContentService.MimeType.TEXT);
  }
}
