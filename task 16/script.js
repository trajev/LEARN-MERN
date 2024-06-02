let data = [
    {
        "name": "Aarav Sharma",
        "marks": "85%",
        "class": "10th",
        "address": "123, MG Road, New Delhi, Delhi"
    },
    {
        "name": "Saanvi Mehta",
        "marks": "92%",
        "class": "12th",
        "address": "456, LBS Marg, Mumbai, Maharashtra"
    },
    {
        "name": "Vivaan Patel",
        "marks": "78%",
        "class": "9th",
        "address": "789, JN Street, Ahmedabad, Gujarat"
    },
    {
        "name": "Diya Reddy",
        "marks": "88%",
        "class": "11th",
        "address": "321, MG Road, Hyderabad, Telangana"
    },
    {
        "name": "Arjun Nair",
        "marks": "81%",
        "class": "10th",
        "address": "654, MG Road, Bangalore, Karnataka"
    },
    {
        "name": "Ananya Roy",
        "marks": "90%",
        "class": "12th",
        "address": "987, Park Street, Kolkata, West Bengal"
    },
    {
        "name": "Ishaan Kumar",
        "marks": "75%",
        "class": "9th",
        "address": "135, CP Road, Patna, Bihar"
    },
    {
        "name": "Aditi Singh",
        "marks": "89%",
        "class": "11th",
        "address": "246, MI Road, Jaipur, Rajasthan"
    },
    {
        "name": "Krishna Gupta",
        "marks": "83%",
        "class": "10th",
        "address": "357, FC Road, Pune, Maharashtra"
    },
    {
        "name": "Mira Das",
        "marks": "91%",
        "class": "12th",
        "address": "468, Lake Town, Kolkata, West Bengal"
    },
    {
        "name": "Rohan Joshi",
        "marks": "80%",
        "class": "9th",
        "address": "579, JV Road, Mumbai, Maharashtra"
    },
    {
        "name": "Nisha Pillai",
        "marks": "87%",
        "class": "11th",
        "address": "681, MG Road, Kochi, Kerala"
    },
    {
        "name": "Karthik Shetty",
        "marks": "82%",
        "class": "10th",
        "address": "792, MG Road, Mangalore, Karnataka"
    },
    {
        "name": "Sneha Jain",
        "marks": "86%",
        "class": "12th",
        "address": "893, MG Road, Surat, Gujarat"
    },
    {
        "name": "Pranav Deshmukh",
        "marks": "79%",
        "class": "9th",
        "address": "135, SP Road, Nagpur, Maharashtra"
    },
    {
        "name": "Riya Bhatt",
        "marks": "88%",
        "class": "11th",
        "address": "246, CG Road, Gandhinagar, Gujarat"
    },
    {
        "name": "Akhil Varma",
        "marks": "84%",
        "class": "10th",
        "address": "357, MG Road, Lucknow, Uttar Pradesh"
    },
    {
        "name": "Tanvi Aggarwal",
        "marks": "90%",
        "class": "12th",
        "address": "468, MG Road, Chandigarh, Punjab"
    },
    {
        "name": "Rahul Choudhary",
        "marks": "76%",
        "class": "9th",
        "address": "579, NH Road, Bhopal, Madhya Pradesh"
    },
    {
        "name": "Aisha Khan",
        "marks": "89%",
        "class": "11th",
        "address": "681, MG Road, Lucknow, Uttar Pradesh"
    }
]

function printData( data ){
    data.map((student) => {
        let datasec = document.querySelector(".student-cards")
        
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student');
    
        const name = document.createElement('p');
        name.textContent = `Name: ${student.name}`;
        studentDiv.appendChild(name);
    
        const marks = document.createElement('p');
        marks.textContent = `Marks: ${student.marks}`;
        studentDiv.appendChild(marks);
    
        const studentClass = document.createElement('p');
        studentClass.textContent = `Class: ${student.class}`;
        studentDiv.appendChild(studentClass);
    
        const address = document.createElement('p');
        address.textContent = `Address: ${student.address}`;
        studentDiv.appendChild(address);
    
        datasec.appendChild(studentDiv);
    
    })
}


if( document.querySelector("input").value==="" ){
    printData( data )
}


function handleSearch(){
    let value = document.querySelector("input").value;
    // document.querySelector("input").value="";
    
    // console.log( value );

    let filteredData = data.filter( (val)=>{
        return val.name.toLowerCase().includes( value.toLowerCase() );
    } )


    document.querySelector(".student-cards").innerHTML="";
    printData( filteredData )

}

