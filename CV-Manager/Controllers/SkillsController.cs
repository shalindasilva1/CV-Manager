using CV_Manager.Models;
using Domain.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CV_Manager.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("_CVMCROSPolicy")]
    [ApiController]
    public class SkillsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public SkillsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Skills
        [HttpGet]
        public async Task<ActionResult<List<Skills>>> GetSkills()
        {
            try
            {
                var result = await _unitOfWork.Skills.GetAllAsync();
                return Ok(result.ToList());
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // GET: api/Skills/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Skills>> GetSkills(long id)
        {
            try
            {
                var result = await _unitOfWork.Skills.GetByIdAsync(id);
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

        // PUT: api/Skills/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSkills(long id, Skills Skills)
        {
            if (id != Skills.Id)
            {
                return BadRequest();
            }

            try
            {
                await _unitOfWork.Skills.UpdateAsync(Skills);
            }
            catch (System.Exception ex)
            {
                if (await SkillsExists(id) > 0)
                {
                    return NotFound();
                }
                else
                {
                    return BadRequest(ex);
                }
            }

            return Ok(Skills);
        }

        // POST: api/Skills
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Skills>> PostSkills(Skills Skills)
        {
            try
            {
                await _unitOfWork.Skills.AddAsync(Skills);
                return CreatedAtAction("GetSkills", new { id = Skills.Id }, Skills);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }


        }

        // DELETE: api/Skills/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSkills(long id)
        {
            var Skills = await _unitOfWork.Skills.GetByIdAsync(id);
            if (Skills == null)
            {
                return NotFound();
            }

            try
            {
                await _unitOfWork.Skills.RemoveAsync(Skills);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }

            return Ok(Skills);
        }

        private async Task<int> SkillsExists(long id)
        {
            return await _unitOfWork.Skills.CountWhereAsync(x => x.Id == id);
        }
    }
}
