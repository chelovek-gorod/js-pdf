function getPdfClick() {

    window.jsPDF = window.jspdf.jsPDF;

    var doc = new jsPDF();

    doc.addImage("logo.jpg", "JPEG", 15, 40, 180, 180);

    doc.addFont("Roboto-Regular.ttf", "PTSans", "normal");

    doc.setFont("PTSans"); // set font
    doc.setFontSize(10);
    doc.text("Пример кириллицы ёЁйЁ!", 30, 30);
}