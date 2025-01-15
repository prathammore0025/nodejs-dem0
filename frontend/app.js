const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/data');
    const data = await response.json();
    document.getElementById('output').textContent = data.message;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
