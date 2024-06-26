//alert ("intern");
//Cambio unità misura
function _JSFunctBlock_onDataUpdate(me, eventInfo)
{
    var x1 = project.getTag("U_misura_lin");
    if (x1 === 1 || x1 === 0)  //lineare internazionale
    {
        //alert ("intern");
        project.setTag("Klin", 1);  
        project.setTag("UnitLin","mm"); //Unità di misura è mm
    }
    if (x1 === 2)  //lineare anglosassone
    {
        project.setTag("Klin", 0.03937);
        project.setTag("UnitLin","in"); ////Unità di misura è In
    }        
    return false;       
}

function _JSFunctBlock1_onDataUpdate(me, eventInfo)
{
    project.setTag("Cambio_pagina_hmi", true);   
    return false; 
}

function Alarms_General(me, eventInfo)
{
    var A1 = project.getTag("All_Emergenza"); 
    var A2 = project.getTag("All_pw_off"); 
    var A3 = project.getTag("All_VccOut"); 
    var A4 = project.getTag("All_Pressione"); 
    var A5 = project.getTag("All_Ripari_ap"); 
    var A6 = project.getTag("All_Protezione_mt_generale"); 
    var A7 = project.getTag("Vuoto110_6");
    var A8 = project.getTag("All_Driver_bracci");
    var A9 = project.getTag("All_Driver_forma"); 
    var A10 = project.getTag("All_Driver_estrattore"); 
    var A11 = project.getTag("All_Driver_controforma"); 
    var A12 = project.getTag("All_Trasmissione_bracci_sganciata"); 
    var A13 = project.getTag("All_Trasmissione_forma_sganciata"); 
    var A14 = project.getTag("All_Extracorsa_etrattore"); 
    var A15 = project.getTag("All_Vcc_freni_motori"); 
    var A16 = project.getTag("All_Serial_comm_error"); 
    var A17 = project.getTag("All_Termico_pompa_vuoto"); 
    var A18 = project.getTag("All_Termico_tappeti_accessori"); 
    var A19 = project.getTag("All_Termico_mot_ripari"); 
    var A20 = project.getTag("Allarme_Batteria_PLC_scarica"); 
    if (A1 || A2 || A3 || A4 || A5 || A6 || A7 || A8 || A9 || A10 || A11 || A12 || A13 || A14 || A15 || A16 || A17 || A18 || A19 || A20)
    {
       project.showDialog("Emergenze.jmx");  
    }
    else if (!A1 && !A2 && !A3 && !A4 && !A5 && !A6 && !A7 && !A8 && !A9 && !A10 && !A11 && !A12 && !A13 && !A14 && !A15 && !A16 && !A17 && !A18 && !A19 && !A20)
    {
       project.closeDialog("Emergenze.jmx");  
    }  
}

function Alarm_Em_Assi(me, eventInfo)
{
//    var A1 = project.getTag("All_Extracorsa_forma");
//    if (A1)
//    {
//       project.showDialog("Emergenze - Assi.jmx");  
//    }
//    else if (!A1)
//    {
//       project.closeDialog("Emergenze - Assi.jmx");  
//    }    
}

function Alarm_Em_Reg(me, eventInfo)
{
    var A1 = project.getTag("All_Drv_reg_Carrello_1");
    var A2 = project.getTag("All_Drv_reg_Carrello_2");
    var A3 = project.getTag("All_Drv_reg_Carrello_3");
    var A4 = project.getTag("All_Drv_reg_Carrello_4");
    var A5 = project.getTag("All_Drv_reg_Bracci");
    var A6 = project.getTag("All_Drv_reg_Pinza_sx");
    var A7 = project.getTag("All_Drv_reg_Pinza_dx");   
    var A8 = project.getTag("All_Drv_reg_Pinza_dx");
    var A9 = project.getTag("All_Extracorsa_forma");
    if (A1 || A2 || A3 || A4 || A5 || A6 || A7 || A8)
    {
       project.showDialog("Emergenza - Regolazioni.jmx");  
    }
    else if (!A1 && !A2 && !A3 && !A4 && !A5 && !A6 && !A7 && !A8)
    {
       project.closeDialog("Emergenza - Regolazioni.jmx");  
    }    
}

function Alarm_Quote(me, eventInfo)
{
    var A1 = project.getTag("All_Quote_errate");
    if (A1)
    {
       project.showDialog("Allarme Quote.jmx");  
    }
    else if (!A1)
    {
       project.closeDialog("Allarme Quote.jmx");  
    }    
}

function Alarm_Sforzo_Forma(me, eventInfo)
{
    var A1 = project.getTag("All_Sforzo_forma");
    if (A1)
    {
       project.showDialog("Allarme Sforzo Forma.jmx");  
    }
    else if (!A1)
    {
       project.closeDialog("Allarme Sforzo Forma.jmx");  
    }    
}

function Alarm_Test_Scatola(me, eventInfo)
{
    var A1 = project.getTag("All_scatola");
    if (A1)
    {
       project.showDialog("Allarme Test Scatola.jmx");  
    }
    else if (!A1)
    {
       project.closeDialog("Allarme Test Scatola.jmx");  
    }    
}

