async function getData() {
    const data = await fetch("https://webemea.nexteer.com:4643/mikron-api/api/Form/loadallplantheaderstolist?plant=577");
    
    //chciałbym żeby był taki formularz jak poniżej zamiast tego powyżej (zwraca tylko unasigned i priority)
    //const data = await fetch("https://webemea.nexteer.com:4643/mikron-api/api/Form/loadallplantheaderstolist?plant=577&activeStatus=Unassigned&isPriority=true"); 

    const records = await data.json();

    let tab = '';
    records.forEach(function(order) {
        tab += `<tr>
            <td><p class="order priority">${order.orderNumber}</p><p class="name">${order.requestedBy}</P></td>
            <td class="descryption">${order.description}</td>
            </tr>`
    })  
    
    const data1 = await fetch("https://webemea.nexteer.com:4643/mikron-api/api/Form/loadallplantheaderstolist?plant=577");
    
    //chciałbym żeby był taki formularz jak poniżej zamiast tego powyżej (zwraca tylko unasigned i nie priority)
    //const data1 = await fetch("https://webemea.nexteer.com:4643/mikron-api/api/Form/loadallplantheaderstolist?plant=577&activeStatus=Unassigned&isPriority=false"); 
    const records1 = await data1.json();
        records1.forEach(function(order) {
            tab += `<tr>
                <td><p class="order">${order.orderNumber}</p><p class="name">${order.requestedBy}</P></td>
                <td class="descryption">${order.description}</td>
                </tr>`        
    })

    const data2 = await fetch("https://webemea.nexteer.com:4643/mikron-api/api/Form/loadallplantheaderstolist?plant=577");
    
    //chciałbym żeby był taki formularz jak poniżej zamiast tego powyżej (zwraca tylko assigned)
    //const data2 = await fetch("https://webemea.nexteer.com:4643/mikron-api/api/Form/loadallplantheaderstolist?plant=577&activeStatus=Assigned"); 
    
    let tab2 = '';
    const records2 = await data2.json();
        records2.forEach(function(order) {
            tab2 += `<tr class="tableRow">
                <td><p class="order">${order.orderNumber}</p><p class="name">Zlecający: ${order.requestedBy}</P><p class="name">Wykonuje: ${order.assignedTo}</P></td>
                </tr>`        
    })
    
    let x1 = await fetch("http://10.236.39.68/fresh.xml");
    let y1 = await x1.text();
    document.getElementById("value1").innerHTML = (y1.substr(143, 4));
 
    let x2 = await fetch("http://10.236.39.44/fresh.xml");
    let y2 = await x2.text();
    document.getElementById("value2").innerHTML = (y2.substr(143, 4));
    document.getElementById('tbody1').innerHTML = tab;
    document.getElementById('tbody2').innerHTML = tab2;






}