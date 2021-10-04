using CV_Manager.Models;
using Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CV_Manager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public JobsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Jobs
        [HttpGet]
        public async Task<ActionResult<List<Jobs>>> GetJobs()
        {
            try
            {
                var result = await _unitOfWork.Jobs.GetAllAsync();
                return Ok(result.ToList());
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // GET: api/Jobs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Jobs>> GetJobs(long id)
        {
            try
            {
                var result = await _unitOfWork.Jobs.GetByIdAsync(id);
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

        // PUT: api/Jobs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJobs(long id, Jobs jobs)
        {
            if (id != jobs.Id)
            {
                return BadRequest();
            }

            try
            {
                await _unitOfWork.Jobs.UpdateAsync(jobs);
            }
            catch (System.Exception ex)
            {
                if (await JobsExists(id) > 0)
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

        // POST: api/Jobs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Jobs>> PostJobs(Jobs jobs)
        {
            try
            {
                await _unitOfWork.Jobs.AddAsync(jobs);
                return CreatedAtAction("GetJobs", new { id = jobs.Id }, jobs);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }

            
        }

        // DELETE: api/Jobs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJobs(long id)
        {
            var jobs = await _unitOfWork.Jobs.GetByIdAsync(id);
            if (jobs == null)
            {
                return NotFound();
            }

            try
            {
                await _unitOfWork.Jobs.RemoveAsync(jobs);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }

            return Ok(jobs);
        }

        private async Task<int> JobsExists(long id)
        {
            return await _unitOfWork.Jobs.CountWhereAsync(x => x.Id == id);
        }
    }
}
