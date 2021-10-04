using CV_Manager.Models;
using Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CV_Manager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResumesController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        public ResumesController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Resumes
        [HttpGet]
        public async Task<ActionResult<List<Resumes>>> GetJobs()
        {
            try
            {
                var result = await _unitOfWork.Resumes.GetAllAsync();
                return Ok(result.ToList());
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // GET: api/Resumes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Resumes>> GetJobs(long id)
        {
            try
            {
                var result = await _unitOfWork.Resumes.GetByIdAsync(id);
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

        // PUT: api/Resumes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJobs(long id, Resumes jobs)
        {
            if (id != jobs.Id)
            {
                return BadRequest();
            }

            try
            {
                await _unitOfWork.Resumes.UpdateAsync(jobs);
            }
            catch (System.Exception ex)
            {
                if (await ResumesExists(id) > 0)
                {
                    return NotFound();
                }
                else
                {
                    return BadRequest(ex);
                }
            }

            return Ok(jobs);
        }

        // POST: api/Resumes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Resumes>> PostJobs(Resumes jobs)
        {
            try
            {
                await _unitOfWork.Resumes.AddAsync(jobs);
                return CreatedAtAction("GetJobs", new { id = jobs.Id }, jobs);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }


        }

        // DELETE: api/Resumes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJobs(long id)
        {
            var jobs = await _unitOfWork.Resumes.GetByIdAsync(id);
            if (jobs == null)
            {
                return NotFound();
            }

            try
            {
                await _unitOfWork.Resumes.RemoveAsync(jobs);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }

            return Ok(jobs);
        }

        private async Task<int> ResumesExists(long id)
        {
            return await _unitOfWork.Resumes.CountWhereAsync(x => x.Id == id);
        }
    }
}
