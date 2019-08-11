using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using FI.AtividadeEntrevista.DML;

namespace WebAtividadeEntrevista.Models
{
    public class BeneficiarioModel
    {
        /// <summary>
        /// Id
        /// </summary>
        public long Id { get; set; }

        /// <summary>
        /// CPF
        /// </summary>
        [Required]
        public string CPFBeneficiario { get; set; }

        /// <summary>
        /// Nome
        /// </summary>
        [Required]
        public string NOMEBeneficiario { get; set; }

        /// <summary>
        /// IdCliente
        /// </summary>
        [Required]
        public int IDCLIENTE { get; set; }

        public static implicit operator BeneficiarioModel(Beneficiario v)
        {
            throw new NotImplementedException();
        }
    }
}