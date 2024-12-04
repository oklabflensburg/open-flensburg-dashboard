export interface SolarAPIData {
    unit_registration_number: string,
    last_update: Date,
    network_operator_audit: string,
    location_registration_number: string,
    operator_registration_number: string,
    country: string,
    state: string,
    district: string,
    location: string,
    postcode: number,
    city: string,
    municipality_name: string,
    municipality_key: number,
    registration_date: Date,
    commissioning_date: Date,
    unit_system_status_id: number,
    unit_operational_status: string,
    not_present_migrated_units: number,
    unit_name: string,
    usage_area: string,
    weic_not_available: number,
    power_plant_number_not_available: number,
    energy_source: string,
    supply_type: string,
    gross_capacity: number,
    net_nominal_capacity: number,
    remote_controllability: number,
    assigned_active_power_inverter: number,
    amount_modules: number,
    power_limitation: string,
    uniform_orientation_tilt_angle_id: number,
    main_orientation: string,
    main_orientation_tilt_angle: string,
    eeg_registration_number: string
}

export interface WindAPIData {
    unit_registration_number: string,
    last_update: Date,
    network_operator_audit: string,
    location_registration_number: string,
    operator_registration_number: string,
    country: string,
    state: string,
    district: string,
    location: string,
    postcode: number,
    city: string,
    municipality_name: string,
    municipality_key: number,
    registration_date: Date,
    commissioning_date: Date,
    unit_system_status_id: number,
    unit_operational_status: string,
    not_present_migrated_units: number,
    unit_name: string,
    usage_area: string,
    weic_not_available: number,
    power_plant_number_not_available: number,
    energy_source: string,
    supply_type: string,
    gross_capacity: number,
    net_nominal_capacity: number,
    remote_controllability: number,
    assigned_active_power_inverter: number,
    amount_modules: number,
    power_limitation: string,
    uniform_orientation_tilt_angle_id: number,
    main_orientation: string,
    main_orientation_tilt_angle: string,
    eeg_registration_number: string
}

export interface BiomassAPIData {
    unit_registration_number: string,
    last_update: Date,
    network_operator_audit: string,
    location_registration_number: string,
    operator_registration_number: string,
    country: string,
    state: string,
    district: string,
    location: string,
    postcode: number,
    city: string,
    municipality_name: string,
    municipality_key: number,
    registration_date: Date,
    commissioning_date: Date,
    unit_system_status_id: number,
    unit_operational_status: string,
    not_present_migrated_units: number,
    unit_name: string,
    usage_area: string,
    weic_not_available: number,
    power_plant_number_not_available: number,
    energy_source: string,
    supply_type: string,
    gross_capacity: number,
    net_nominal_capacity: number,
    remote_controllability: number,
    assigned_active_power_inverter: number,
    amount_modules: number,
    power_limitation: string,
    uniform_orientation_tilt_angle_id: number,
    main_orientation: string,
    main_orientation_tilt_angle: string,
    eeg_registration_number: string
}

export interface NuclearAPIData {
    unit_registration_number: string,
    last_update: Date,
    network_operator_audit: string,
    location_registration_number: string,
    operator_registration_number: string,
    country: string,
    state: string,
    district: string,
    location: string,
    postcode: number,
    city: string,
    municipality_name: string,
    municipality_key: number,
    registration_date: Date,
    commissioning_date: Date,
    unit_system_status_id: number,
    unit_operational_status: string,
    not_present_migrated_units: number,
    unit_name: string,
    usage_area: string,
    weic_not_available: number,
    power_plant_number_not_available: number,
    energy_source: string,
    supply_type: string,
    gross_capacity: number,
    net_nominal_capacity: number,
    remote_controllability: number,
    assigned_active_power_inverter: number,
    amount_modules: number,
    power_limitation: string,
    uniform_orientation_tilt_angle_id: number,
    main_orientation: string,
    main_orientation_tilt_angle: string,
    eeg_registration_number: string
}

export interface CompustionAPIData {
    unit_registration_number: string,
    last_update: Date,
    network_operator_audit: string,
    location_registration_number: string,
    operator_registration_number: string,
    country: string,
    state: string,
    district: string,
    location: string,
    postcode: number,
    city: string,
    municipality_name: string,
    municipality_key: number,
    registration_date: Date,
    commissioning_date: Date,
    unit_system_status_id: number,
    unit_operational_status: string,
    not_present_migrated_units: number,
    unit_name: string,
    usage_area: string,
    weic_not_available: number,
    power_plant_number_not_available: number,
    energy_source: string,
    supply_type: string,
    gross_capacity: number,
    net_nominal_capacity: number,
    remote_controllability: number,
    assigned_active_power_inverter: number,
    amount_modules: number,
    power_limitation: string,
    uniform_orientation_tilt_angle_id: number,
    main_orientation: string,
    main_orientation_tilt_angle: string,
    eeg_registration_number: string
}

export interface WaterAPIData {
    unit_registration_number: string,
    last_update: Date,
    network_operator_audit: string,
    location_registration_number: string,
    operator_registration_number: string,
    country: string,
    state: string,
    district: string,
    location: string,
    postcode: number,
    city: string,
    municipality_name: string,
    municipality_key: number,
    registration_date: Date,
    commissioning_date: Date,
    unit_system_status_id: number,
    unit_operational_status: string,
    not_present_migrated_units: number,
    unit_name: string,
    usage_area: string,
    weic_not_available: number,
    power_plant_number_not_available: number,
    energy_source: string,
    supply_type: string,
    gross_capacity: number,
    net_nominal_capacity: number,
    remote_controllability: number,
    assigned_active_power_inverter: number,
    amount_modules: number,
    power_limitation: string,
    uniform_orientation_tilt_angle_id: number,
    main_orientation: string,
    main_orientation_tilt_angle: string,
    eeg_registration_number: string
}

export interface PowerAPIData {
    unix_seconds: number[],
    production_types: [
        {
            name: string,
            data: number[]
        }
    ],
    deprecated: boolean
}

export interface PowerData {
    name: string,
    data: number[]
}

export interface Solar {
    energy_source: string;
    unit_operational_status: string;
    net_nominal_capacity: number;
}


export interface Wind {
    energy_source: string;
    unit_operational_status: string;
    net_nominal_capacity: number;
}

export interface Biomass {
    energy_source: string;
    unit_operational_status: string;
    net_nominal_capacity: number;
}

export interface Nuclear {
    energy_source: string;
    unit_operational_status: string;
    net_nominal_capacity: number;
}

export interface Combustion {
    energy_source: string;
    unit_operational_status: string;
    net_nominal_capacity: number;
}

export interface Water {
    energy_source: string;
    unit_operational_status: string;
    net_nominal_capacity: number;
}

export interface EnergyMix {
    energyMix: {
        types: string[];
        percentage: number[];
    }
}