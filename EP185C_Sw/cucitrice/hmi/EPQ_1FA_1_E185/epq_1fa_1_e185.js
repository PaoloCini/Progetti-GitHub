//alert ("intern");
//Cambio unità misura
function _JSFunctBlock_onDataUpdate(me, eventInfo)
{
    var x1 = project.getTag("U_misura_lin");
    var x2 = project.getTag("U_misura_term");
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
    if (x2 === 1 || x2 === 0)  //temperatura gardi Celsius
    {
        project.setTag("Ktmp", 1);
        project.setTag("Ktmp_offset", 0);
        project.setTag("UnitTemp","°C"); //Unità di misura è mm  
    }
    if (x2 === 2)  //temperatura gradi Farhenheit
    {
        project.setTag("Ktmp", 1.8);
        project.setTag("Ktmp_offset", 32);
        project.setTag("UnitTemp","°F"); //Unità di misura è mm
    }
    return false;       
}

function Alarms_General(me, eventInfo)
{
    var A1 = project.getTag("emergenza"); 
    var A2 = project.getTag("Al_Protezioni_Sicurezza"); 
    var A3 = project.getTag("Al_Forma_sganciata"); 
    var A4 = project.getTag("Al_Protezione_servizi"); 
    var A5 = project.getTag("Al_Protezione_Termoregolazione"); 
    var A6 = project.getTag("Al_Protezione_Inveters"); 
    var A7 = project.getTag("Al_Protezione_pila_cartoni");
    var A8 = project.getTag("Al_Protezione_pompa_vuoto");
    var A9 = project.getTag("Al_Protezione_Drivers"); 
    var A10 = project.getTag("All_doppio_cartone"); 
    var A11 = project.getTag("Al_Inverter_Camma"); 
    var A12 = project.getTag("Al_Inverter_Rulli_cinghie"); 
    var A13 = project.getTag("Al_Inverter_Tappeto"); 
    var A14 = project.getTag("Al_Driver_Forma"); 
    var A15 = project.getTag("Avviso_fine_cartone"); 
    var A16 = project.getTag("W111_0"); 
    var A17 = project.getTag("Al_Driver_Estrattore"); 
    var A18 = project.getTag("Al_Driver_Spintore"); 
    if (A1 || A2 || A3 || A4 || A5 || A6 || A7 || A8 || A9 || A10 || A11 || A12 || A13 || A14 || A15 || A16 || A17 || A18)
    {
       project.showDialog("Emergenze.jmx");  
    }
    else if (!A1 && !A2 && !A3 && !A4 && !A5 && !A6 && !A7 && !A8 && !A9 && !A10 && !A11 && !A12 && !A13 && !A14 && !A15 && !A16 && !A17 && !A18)
    {
       project.closeDialog("Emergenze.jmx");  
    }  
}

function Alarm_NC413(me, eventInfo)
{
    var A1 = project.getTag("Al_NC413");
    if (A1)
    {
       project.showDialog("Allarme NC413.jmx");  
    }
    else if (!A1)
    {
       project.closeDialog("Allarme NC413.jmx");  
    }    
}

function Alarm_Drivers_Nastrini(me, eventInfo)
{
    var A1 = project.getTag("Al_Driver_Nastr1_Sx");
    var A2 = project.getTag("Al_Driver_Nastr2_Sx");
    var A3 = project.getTag("Al_Driver_Nastr1_Dx");
    var A4 = project.getTag("Al_Driver_Nastr2_Dx");
    if (A1 || A2 || A3 || A4)
    {
       project.showDialog("Allarme NC413.jmx");  
    }
    else if (!A1 && !A2 && !A3 && !A4)
    {
       project.closeDialog("Allarme NC413.jmx");  
    }    
}

function Alarm_TC(me, eventInfo)
{
    var A1 = project.getTag("Al_Termocontrolli");
    if (A1)
    {
       project.showDialog("Allarme Termocontrolli.jmx");  
    }
    else if (!A1)
    {
       project.closeDialog("Allarme Termocontrolli.jmx");  
    }    
}

function Allarmi(me, eventInfo)
{
    var A1 = project.getTag("Al_sforzo_forma");
    if (A1)
    {
       project.showDialog("Allarmi.jmx");  
    }
    else if (!A1)
    {
       project.closeDialog("Allarmi.jmx");  
    }    
}

function Avvisi(me, eventInfo)
{
    var A1 = project.getTag("Mess_batteria_PLC_scarica");
    var A2 = project.getTag("All_Temperatura_Quadro");
    var A3 = project.getTag("Mess_T_out_avvio_ciclo");
    var A4 = project.getTag("Mess_Condiz_avvio_ciclo");
    var A5 = project.getTag("Mess_out_range_temperature");
    var A6 = project.getTag("Mess_RimuovereNastrini");
    var A7 = project.getTag("Mess_riserva_cartone");
    var A8 = project.getTag("Mess_cartone_non_caricato");
    var A9 = project.getTag("Mess_tappeto_vuoto");
    var A10 = project.getTag("Mess_termosaldante1_esaurim");
    var A11 = project.getTag("Mess_termosaldante2_esaurim");
    var A12 = project.getTag("Mess_termosaldante3_esaurim");
    var A13 = project.getTag("Mess_termosaldante4_esaurim");
    if (A1 || A2 || A3 || A4 || A5 || A6 || A7 || A8 || A9 || A10 || A11 || A12 || A13)
    {
       project.showDialog("Avvisi.jmx");  
    }
    else if (!A1 && !A2 && !A3 && !A4 && !A5 && !A6 && !A7 && !A8 && !A9 && !A10 && !A11 && !A12 && !A13)
    {
       project.closeDialog("Avvisi.jmx");  
    }    
}

function Avv_Lubrificazione(me, eventInfo)
{
    var A1 = project.getTag("Avviso_lubrificazione");
    if (A1)
    {
       project.showDialog("Avviso Lubrificazione.jmx");  
    }
    else if (!A1)
    {
       project.closeDialog("Avviso Lubrificazione.jmx");  
    }    
}


function _JSFunctBlock1_onDataUpdate(me, eventInfo)
{
    var SelZ = project.getTag("SelZone");
    var PagHmi = project.getTag("n_pagina_hmi");
    if (SelZ === 0)
    {
      project.setTag("n_pagina_hmi_pila", PagHmi);    
    }
    else if (SelZ === 1)
    {
      project.setTag("n_pagina_hmi_BordoM", PagHmi);    
    }   
    return false; 
}
function _JSFunctBlock2_onDataUpdate(me, eventInfo)
{
    var SelZ = project.getTag("SelZone");
    var PagHmiReqPila = project.getTag("richiesta_n_pagina_hmi_pila");
    var PagHmiReqBordoM = project.getTag("richiesta_n_pagina_hmi_BordoM");
    if ((SelZ === 0)&&(PagHmiReqPila !== 0))
    {        
      project.setTag("pagina_hmi_req", PagHmiReqPila);    
    } 
    if ((SelZ === 1)&&(PagHmiReqBordoM !== 0))
    {        
      project.setTag("pagina_hmi_req", PagHmiReqBordoM);    
    } 
    return false; 
}