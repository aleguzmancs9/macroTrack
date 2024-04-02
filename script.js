async function fetchMacros() {
    const foodName = document.getElementById('foodName').value;

    const options = {
        method: 'GET',
        url: 'https://dietagram.p.rapidapi.com/apiFood.php',
        params: {
            name: foodName,
            lang: 'pl'
        },
        headers: {
            'X-RapidAPI-Key': 'c06fc1a80cmsha0d0f9738ee4aebp16f3bbjsn0f9ebd1989ed',
            'X-RapidAPI-Host': 'dietagram.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const dish = response.data.dishes[0]; // Assuming there's only one dish in the response
        const result = `Name: ${dish.name}<br>Caloric Content: ${dish.caloric} cal<br>Fat: ${dish.fat}g<br>Carbohydrates: ${dish.carbon}g<br>Protein: ${dish.protein}g`;
        document.getElementById('result').innerHTML = result;
    } catch (error) {
        console.error(error);
        document.getElementById('result').innerText = 'Error fetching data: ' + error.message;
    }
}


