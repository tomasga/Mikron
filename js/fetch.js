async function getData() {
    const data = await fetch("https://webemea.nexteer.com:4643/mikron-api/api/Form/loadallplantheaderstolist?plant=577");
    
    //chciałbym żeby był taki formularz jak poniżej zamiast tego powyżej (zwraca tylko unasigned i priority)
    //const data = await fetch("https://webemea.nexteer.com:4643/mikron-api/api/Form/loadallplantheaderstolist?plant=577&activeStatus=Unassigned&isPriority=true"); 

    const records = await data.json();

    let tab = '';
    records.forEach(function(order) {
        tab += `<tr>
            <td><p class="order">${order.orderNumber}</p><p class="name">${order.requestedBy}</P></td>
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
    document.getElementById('tbody1').innerHTML = tab;






}