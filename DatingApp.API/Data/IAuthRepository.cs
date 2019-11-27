using DatingApp.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Data
{
    public interface IAuthRepository
    {
        public Task<User> Register(User user, string password);
        public Task<User> Login(string username, string password);
        public Task<bool> UserExists(string username);
    }
}
