using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CV_Manager.Data;
using CV_Manager.Models;

namespace CV_Manager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResumesController : ControllerBase
    {
        private readonly CV_ManagerContext _context;

        public ResumesController(CV_ManagerContext context)
        {
            _context = context;
        }

        // GET: api/Resumes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Resumes>>> GetResumes()
        {
            return await _context.Resumes.ToListAsync();
        }

        // GET: api/Resumes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Resumes>> GetResumes(long id)
        {
            var resumes = await _context.Resumes.FindAsync(id);

            if (resumes == null)
            {
                return NotFound();
            }

            return resumes;
        }

        // PUT: api/Resumes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutResumes(long id, Resumes resumes)
        {
            if (id != resumes.Id)
            {
                return BadRequest();
            }

            _context.Entry(resumes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ResumesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Resumes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Resumes>> PostResumes(Resumes resumes)
        {
            _context.Resumes.Add(resumes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetResumes", new { id = resumes.Id }, resumes);
        }

        // DELETE: api/Resumes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteResumes(long id)
        {
            var resumes = await _context.Resumes.FindAsync(id);
            if (resumes == null)
            {
                return NotFound();
            }

            _context.Resumes.Remove(resumes);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ResumesExists(long id)
        {
            return _context.Resumes.Any(e => e.Id == id);
        }
    }
}
