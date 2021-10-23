using CV_Manager.Models;
using Domain.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CV_Manager.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("_CVMCROSPolicy")]
    [ApiController]
    public class CompaniesController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        public CompaniesController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Companies
        [HttpGet]
        public async Task<ActionResult<List<Companies>>> GetCompanies()
        {
            try
            {
                var result = await _unitOfWork.Companies.GetAllAsync();
                return Ok(result.ToList());
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // GET: api/Companies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Companies>> GetCompanies(long id)
        {
            try
            {
                var result = await _unitOfWork.Companies.GetByIdAsync(id);
                if (result == null)
                {
                    return NotFound();
                }
                return Ok(result);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // PUT: api/Companies/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompanies(long id, Companies Companies)
        {
            if (id != Companies.Id)
            {
                return BadRequest();
            }

            try
            {
                await _unitOfWork.Companies.UpdateAsync(Companies);
            }
            catch (System.Exception ex)
            {
                if (await CompaniesExists(id) > 0)
                {
                    return NotFound();
                }
                else
                {
                    return BadRequest(ex);
                }
            }

            return Ok(Companies);
        }

        // POST: api/Companies
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Companies>> PostCompanies(Companies Companies)
        {
            try
            {
                await _unitOfWork.Companies.AddAsync(Companies);
                return CreatedAtAction("GetCompanies", new { id = Companies.Id }, Companies);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }


        }

        // DELETE: api/Companies/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompanies(long id)
        {
            var Companies = await _unitOfWork.Companies.GetByIdAsync(id);
            if (Companies == null)
            {
                return NotFound();
            }

            try
            {
                await _unitOfWork.Companies.RemoveAsync(Companies);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }

            return Ok(Companies);
        }

        private async Task<int> CompaniesExists(long id)
        {
            return await _unitOfWork.Companies.CountWhereAsync(x => x.Id == id);
        }
    }
}
