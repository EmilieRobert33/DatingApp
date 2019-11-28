using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace DatingApp.API.Controllers
{
    // http://localhost:5000/WeatherForecast
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Parfait", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly DataContext _dataContext;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, DataContext dataContext)
        {
            _logger = logger;
            _dataContext = dataContext;

        }
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetWeatherForecast()
        {
            var weatherForecastList = await _dataContext.WeatherForecasts
            .ToListAsync();

            return Ok(weatherForecastList);
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetWeatherForecast(int id)
        {
            var weatherForecast = await _dataContext.WeatherForecasts.
                FirstOrDefaultAsync(x => x.Id == id);

            return Ok(weatherForecast);
        }
    }
}
