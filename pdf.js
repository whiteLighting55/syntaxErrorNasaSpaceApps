function genPDF(){
    var doc=new jsPDF();
    let text = document.getElementById("").value;
    doc.addImage(0,0, "assets/logo_longW.png")
    doc.text(20,20,text);
    doc.save("ticket_de_compra_AstroXplore.pdf")
}