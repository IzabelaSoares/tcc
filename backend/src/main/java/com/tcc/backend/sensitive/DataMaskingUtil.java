package com.tcc.backend.sensitive;

public class DataMaskingUtil {

    /**
     * Mascara um CPF, mostrando apenas os primeiros 3 e últimos 2 dígitos
     * Exemplo: "123.456.789-00" → "123.***.***-00"
     */
    public static String maskCPF(String cpf) {
        if (cpf == null || cpf.length() < 11) {
            return cpf; // Retorna sem máscara se não for um CPF válido
        }

        // Remove caracteres não numéricos
        String numericCPF = cpf.replaceAll("[^0-9]", "");

        // Formata com máscara
        return numericCPF.substring(0, 3) + ".***.***-" + numericCPF.substring(numericCPF.length() - 2);
    }

    /**
     * Mascara um e-mail, mostrando o primeiro caractere, domínio e TLD
     * Exemplo: "usuario@provedor.com.br" → "u****@provedor.com.br"
     */
    public static String maskEmail(String email) {
        if (email == null || !email.contains("@")) {
            return email; // Retorna sem máscara se não for um e-mail válido
        }

        int atIndex = email.indexOf("@");
        String localPart = email.substring(0, atIndex);
        String domain = email.substring(atIndex);

        // Mantém o primeiro caractere e mascara o resto
        String maskedLocal = !localPart.isEmpty()
                ? localPart.charAt(0) + "*".repeat(Math.max(0, localPart.length() - 1))
                : "";

        return maskedLocal + domain;
    }

    /**
     * Verificação que decide qual máscara aplicar baseado no tipo de dado
     */
    public static String maskSensitiveData(String data) {
        if (data == null) return null;

        if (data.matches(".*@.*")) {
            return maskEmail(data);
        } else if (data.replaceAll("[^0-9]", "").length() == 11) {
            return maskCPF(data);
        }
        return data; // Retorna sem máscara se não for CPF nem e-mail
    }
}