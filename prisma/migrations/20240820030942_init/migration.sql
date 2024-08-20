-- CreateTable
CREATE TABLE `DesaBlankspot` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `kecamatan` VARCHAR(191) NOT NULL,
    `kelurahan` VARCHAR(191) NOT NULL,
    `location_name` VARCHAR(191) NOT NULL,
    `location_address` VARCHAR(191) NOT NULL,
    `latitude` VARCHAR(191) NOT NULL,
    `longitude` VARCHAR(191) NOT NULL,
    `location_code` VARCHAR(191) NOT NULL,
    `operational` VARCHAR(191) NOT NULL,
    `eletric_resources` VARCHAR(191) NOT NULL,
    `eletric_capacity` VARCHAR(191) NOT NULL,
    `id_pelanggan` VARCHAR(191) NOT NULL,
    `signal_available` VARCHAR(191) NOT NULL,
    `operator` VARCHAR(191) NOT NULL,
    `signal_power` VARCHAR(191) NOT NULL,
    `signal_needed` VARCHAR(191) NOT NULL,
    `sector_category` VARCHAR(191) NOT NULL,
    `priority` VARCHAR(191) NOT NULL,
    `location_image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DesaApp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `desa` VARCHAR(191) NOT NULL,
    `kecamatan` VARCHAR(191) NOT NULL,
    `admin_name` VARCHAR(191) NOT NULL,
    `admin_phone_number` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsedApps` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `app_name` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `used_since` DATETIME(3) NOT NULL,
    `app_dev` VARCHAR(191) NOT NULL,
    `app_url` VARCHAR(191) NOT NULL,
    `desa_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UsedApps` ADD CONSTRAINT `UsedApps_desa_id_fkey` FOREIGN KEY (`desa_id`) REFERENCES `DesaApp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
