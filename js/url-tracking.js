const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

if (urlParams.has("cstm_ppc_channel")) {
    const cstm_ppc_channel = urlParams.get("cstm_ppc_channel")
    Set_Cookie("cstm_ppc_channel", cstm_ppc_channel, 30) //the number 30 = 30 days
}
if (urlParams.has("cstm_ppc_campaign")) {
    const cstm_ppc_campaign = urlParams.get("cstm_ppc_campaign")
    Set_Cookie("cstm_ppc_campaign", cstm_ppc_campaign, 30)
}
if (urlParams.has("cstm_ppc_placement")) {
    const cstm_ppc_placement = urlParams.get("cstm_ppc_placement")
    Set_Cookie("cstm_ppc_placement", cstm_ppc_placement, 30)
}
if (urlParams.has("cstm_ppc_device")) {
    const cstm_ppc_device = urlParams.get("cstm_ppc_device")
    Set_Cookie("cstm_ppc_device", cstm_ppc_device, 30)
}
if (urlParams.has("utm_keyword")) {
    const utm_keyword = urlParams.get("utm_keyword")
    Set_Cookie("utm_keyword", utm_keyword, 30)
}
if (urlParams.has("cstm_ppc_medium")) {
    const cstm_ppc_medium = urlParams.get("cstm_ppc_medium")
    Set_Cookie("cstm_ppc_medium", cstm_ppc_medium, 30)
}

if (urlParams.has("cstm_ppc_keyword")) {
    const cstm_ppc_keyword = urlParams.get("cstm_ppc_keyword")
    Set_Cookie("cstm_ppc_keyword", cstm_ppc_keyword, 30)
}


if (urlParams.has("gclid")) {
    const gclid = urlParams.get("gclid")
    Set_Cookie("gclid", gclid, 30)
}
if (urlParams.has("fbclid")) {
    const fbclid = urlParams.get("fbclid")
    Set_Cookie("fbclid", fbclid, 30)
}

if (urlParams.has("utm_campaign")) {
    const utm_campaign = urlParams.get("utm_campaign")
    Set_Cookie("utm_campaign", utm_campaign, 30) //the number 30 = 30 days
}
if (urlParams.has("utm_source")) {
    const utm_source = urlParams.get("utm_source")
    Set_Cookie("utm_source", utm_source, 30) //the number 30 = 30 days
}
if (urlParams.has("utm_term")) {
    const utm_term = urlParams.get("utm_term")
    Set_Cookie("utm_term", utm_term, 30) //the number 30 = 30 days
}
if (urlParams.has("utm_placement")) {
    const utm_placement = urlParams.get("utm_placement")
    Set_Cookie("utm_placement", utm_placement, 30) //the number 30 = 30 days
}
if (urlParams.has("utm_device")) {
    const utm_device = urlParams.get("utm_device")
    Set_Cookie("utm_device", utm_device, 30) //the number 30 = 30 days
}

if (urlParams.has("utm_medium")) {
    const utm_medium = urlParams.get("utm_medium")
    Set_Cookie("utm_medium", utm_medium, 30) //the number 30 = 30 days
}

if (urlParams.has("utm_addGroup")) {
    const utm_addGroup = urlParams.get("utm_addGroup")
    Set_Cookie("utm_addGroup", utm_addGroup, 30) //the number 30 = 30 days
}

if (urlParams.has("utm_matchType")) {
    const utm_matchType = urlParams.get("utm_matchType")
    Set_Cookie("utm_matchType", utm_matchType, 30) //the number 30 = 30 days
}

if (urlParams.has("utm_Location")) {
    const utm_Location = urlParams.get("utm_Location")
    Set_Cookie("utm_Location", utm_Location, 30) //the number 30 = 30 days
}

if (urlParams.has("utm_UTMGCLID")) {
    const utm_UTMGCLID = urlParams.get("utm_UTMGCLID")
    Set_Cookie("utm_UTMGCLID", utm_UTMGCLID, 30) //the number 30 = 30 days
}


if (urlParams.has("srd")) {
    const srd = urlParams.get("srd")
    Set_Cookie("srd", srd, 30) //the number 30 = 30 days
}

if (urlParams.has("cuser")) {
    const cuser = urlParams.get("cuser")
    Set_Cookie("cuser", cuser, 30) //the number 30 = 30 days
}



// if(urlParams.has('UTM_Source')){
//     const UTM_Source = urlParams.get('UTM_Source');
//     Set_Cookie('UTM_Source', UTM_Source, 30);
// }
// if(urlParams.has('UTM_Subsource')){
//     const UTM_Subsource = urlParams.get('UTM_Subsource');
//     Set_Cookie('UTM_Subsource', UTM_Subsource, 30);
// }
// if(urlParams.has('UTM_Medium')){
//     const UTM_Medium = urlParams.get('UTM_Medium');
//     Set_Cookie('UTM_Medium', UTM_Medium, 30);
// }
// if(urlParams.has('UTM_Campaign')){
//     const UTM_Campaign = urlParams.get('UTM_Campaign');
//     Set_Cookie('UTM_Campaign', UTM_Campaign, 30);
// }
// if(urlParams.has('UTM_Term')){
//     const UTM_Term = urlParams.get('UTM_Term');
//     Set_Cookie('UTM_Term', UTM_Term, 30);
// }
// if(urlParams.has('UTM_Ad_Group')){
//     const UTM_Ad_Group = urlParams.get('UTM_Ad_Group');
//     Set_Cookie('UTM_Ad_Group', UTM_Ad_Group, 30);
// }
// if(urlParams.has('UTM_Placement')){
//     const UTM_Placement = urlParams.get('UTM_Placement');
//     Set_Cookie('UTM_Placement', UTM_Placement, 30);
// }
// if(urlParams.has('UTM_Device')){
//     const UTM_Device = urlParams.get('UTM_Device');
//     Set_Cookie('UTM_Device', UTM_Device, 30);
// }

// if(urlParams.has('UTM_Ad')){
//     const UTM_Ad = urlParams.get('UTM_Ad');
//     Set_Cookie('UTM_Ad', UTM_Ad, 30);
// }
// if(urlParams.has('UTM_Location')){
//     const UTM_Location = urlParams.get('UTM_Location');
//     Set_Cookie('UTM_Location', UTM_Location, 30);
// }
if (urlParams.has('utm_channel')) {
    const utm_channel = urlParams.get('utm_channel');
    Set_Cookie('utm_channel', utm_channel, 30);
}
// if(urlParams.has('UTM_Content')){
//     const UTM_Content = urlParams.get('UTM_Content');
//     Set_Cookie('UTM_Content', UTM_Content, 30);
// }
// if(urlParams.has('UTM_GCLID')){
//     const UTM_GCLID = urlParams.get('UTM_GCLID');
//     Set_Cookie('UTM_GCLID', UTM_GCLID, 30);
// }