import React, {useState, useEffect} from 'react';

const USERS_URL = 'https://example.com/api/users';

export default function Table () {

const [tableData, setTableData] = useState([]);
 const [isLoading, setIsLoading] = useState(false)
 const [currentPage, setCurrentPage] = useState(0);

const fetchData = async() => {
setIsLoading(true);
const response = await(fetch(`${USERS_URL}?page=${currentPage}`));
const data = await response.json();
setIsLoading(false)
setTableData(data.results);}

useEffect(() => {
fetchData(currentPage)
}, [currentPage])

const tableInfo =  tableData && tableData.map(t =>
<tr key={t.id}>
<td>
{t.id}
</td>
<td>
{t.firstName}
</td>
<td>
{t.lastName}
</td>
</tr>
);

const firstPage = () => {
  setCurrentPage(0)
};
const prevPage = () => {
 setCurrentPage(currentPage - 1)
};

const nextPage = () => {
setCurrentPage(currentPage + 1)
}

const lastPage = () => {
  setCurrentPage(3)
};

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
        {tableInfo}

        </tbody>
      </table>
      <section className="pagination">
        <button className="first-page-btn" onClick={firstPage}
        disabled={currentPage === 0 || isLoading}>first</button>
        <button className="previous-page-btn" onClick={prevPage}
        disabled={currentPage === 0  || isLoading}>previous</button>
        <button className="next-page-btn" onClick={nextPage}
        disabled={currentPage === 3 || isLoading}
        >next</button>
        <button className="last-page-btn" onClick={lastPage}
        disabled={currentPage === 3  || isLoading} >last</button>
      </section>
    </div>
  );
};
