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
        public  IEnumerable<Jobs> GetJobs()
        {
            return  _unitOfWork.Jobs.GetAll();
        }

        //// GET: api/Jobs/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Jobs>> GetJobs(long id)
        //{
        //    var jobs = await _context.Jobs.FindAsync(id);

        //    if (jobs == null)
        //    {
        //        return NotFound();
        //    }

        //    return jobs;
        //}

        //// PUT: api/Jobs/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutJobs(long id, Jobs jobs)
        //{
        //    if (id != jobs.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(jobs).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!JobsExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //// POST: api/Jobs
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<Jobs>> PostJobs(Jobs jobs)
        //{
        //    _context.Jobs.Add(jobs);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetJobs", new { id = jobs.Id }, jobs);
        //}

        //// DELETE: api/Jobs/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteJobs(long id)
        //{
        //    var jobs = await _context.Jobs.FindAsync(id);
        //    if (jobs == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Jobs.Remove(jobs);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        //private bool JobsExists(long id)
        //{
        //    return _context.Jobs.Any(e => e.Id == id);
        //}
    }
}
