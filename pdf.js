function genPDF(){
    var doc=new jsPDF();
    var ctx = canvas.getContext("2d");
    let text = document.getElementById("nombre_cliente").value;
    doc.addImage(canvas.toDataURL("assets/logo_longW.png"),PNG, 30,30)
    doc.text(20,20,text);
    doc.save("ticket_de_compra_AstroXplore.pdf");
}