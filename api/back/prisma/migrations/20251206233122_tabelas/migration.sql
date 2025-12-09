-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `federada` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `resultados_mensais` (
    `id` VARCHAR(191) NOT NULL,
    `mes_referencia` DATETIME(3) NOT NULL,
    `numero_projetos` INTEGER NOT NULL,
    `faturamento` DECIMAL(15, 2) NOT NULL,
    `numero_membros` INTEGER NOT NULL,
    `csat` DECIMAL(5, 2) NOT NULL,
    `engajamento_mej` DECIMAL(5, 2) NOT NULL,
    `fator_colaborativo` DECIMAL(5, 2) NOT NULL,
    `indice_cluster` INTEGER NOT NULL,
    `empresa_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `resultados_mensais_empresa_id_mes_referencia_key`(`empresa_id`, `mes_referencia`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `resultados_mensais` ADD CONSTRAINT `resultados_mensais_empresa_id_fkey` FOREIGN KEY (`empresa_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
