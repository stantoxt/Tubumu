﻿using System;
using System.Security.Cryptography;
using System.Text;

namespace Tubumu.Modules.Core.Utilities.Cryptography
{
    /// <summary>
    /// SHA256加密算法
    /// </summary>
    public static class SHA256
    {
        /// <summary>
        /// Encrypt
        /// </summary>
        /// <param name="rawString"></param>
        /// <param name="salt"></param>
        /// <returns></returns>
        public static string Encrypt(string rawString, string salt)
        {
            if (rawString == null)
            {
                throw new ArgumentNullException(nameof(rawString));
            }
            if (salt == null)
            {
                throw new ArgumentNullException(nameof(salt));
            }
            return Convert.ToBase64String(EncryptToByteArray(rawString, salt));
        }

        /// <summary>
        /// EncryptToByteArray
        /// </summary>
        /// <param name="rawString"></param>
        /// <param name="salt"></param>
        /// <returns></returns>
        public static Byte[] EncryptToByteArray(string rawString, string salt)
        {
            if (rawString == null)
            {
                throw new ArgumentNullException(nameof(rawString));
            }
            if (salt == null)
            {
                throw new ArgumentNullException(nameof(salt));
            }
            Byte[] salted = Encoding.UTF8.GetBytes(String.Concat(rawString, salt));
            System.Security.Cryptography.SHA256 hasher = new SHA256Managed();
            Byte[] hashed = hasher.ComputeHash(salted);
            return hashed;
        }
    }
}