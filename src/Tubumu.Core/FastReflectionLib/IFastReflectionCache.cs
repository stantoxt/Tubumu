﻿namespace Tubumu.Core.FastReflectionLib
{
    /// <summary>
    /// IFastReflectionCache
    /// </summary>
    /// <typeparam name="TKey"></typeparam>
    /// <typeparam name="TValue"></typeparam>
    public interface IFastReflectionCache<TKey, TValue>
    {
        /// <summary>
        /// Get
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        TValue Get(TKey key);
    }
}