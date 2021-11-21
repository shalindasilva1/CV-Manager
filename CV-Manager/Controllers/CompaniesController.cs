using AutoMapper;
using CV_Manager.Models;
using DataAccess.Dtos.Companies;
using Domain.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CV_Manager.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("_CVMCROSPolicy")]
    [ApiController]
    public class CompaniesController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CompaniesController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        // GET: api/Companies
        [HttpGet]
        public async Task<ActionResult<List<CompanyOutput>>> GetCompanies()
        {
            try
            {
                var companies = await _unitOfWork.Companies.GetAllAsync();
                var result = _mapper.Map<IEnumerable<Companies>, List<CompanyOutput>>(companies);
                return Ok(result);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // GET: api/Companies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CompanyOutput>> GetCompanies(long id)
        {
            try
            {
                var company = await _unitOfWork.Companies.GetByIdAsync(id);
                var result = _mapper.Map<CompanyOutput>(company);

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
        public async Task<IActionResult> PutCompanies(long id, CompanyInput company)
        {
            if (id != company.Id)
            {
                return BadRequest();
            }

            try
            {
                var input = _mapper.Map<Companies>(company);
                await _unitOfWork.Companies.UpdateAsync(input);
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

            return Ok(company);
        }

        // POST: api/Companies
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Companies>> PostCompanies(CompanyInput company)
        {
            try
            {
                var input = _mapper.Map<Companies>(company);
                await _unitOfWork.Companies.AddAsync(input);
                return CreatedAtAction("GetCompanies", new { id = company.Id }, company);
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
