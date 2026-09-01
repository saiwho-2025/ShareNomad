-- Demo data only. Replace with verified company-source records before production.
insert into companies (ticker, company_name, country, exchange, website) values
('SONY', 'Sony Group', 'Japan', 'NYSE', 'https://www.sony.com/'),
('DIS', 'Walt Disney Co.', 'United States', 'NYSE', 'https://thewaltdisneycompany.com/'),
('AIR', 'Airbus SE', 'Netherlands', 'Euronext', 'https://www.airbus.com/');

-- Benefit records below are intentionally marked demo and are not claims of real current shareholder benefits.
insert into shareholder_benefits (company_id, title, category, description, country, city, location, benefit_type, discount_value, minimum_shares, status)
select id, 'Hotel partner benefit', 'accommodation', 'Demo record for UI testing; verify official eligibility before use.', 'Japan', 'Tokyo', 'Tokyo', 'discount', 120, 1, 'demo' from companies where ticker='SONY';
insert into shareholder_benefits (company_id, title, category, description, country, city, location, benefit_type, discount_value, minimum_shares, status)
select id, 'Restaurant benefit', 'food', 'Demo record for UI testing; verify official eligibility before use.', 'Japan', 'Tokyo', 'Tokyo', 'discount', 30, 1, 'demo' from companies where ticker='SONY';
insert into shareholder_benefits (company_id, title, category, description, country, city, location, benefit_type, discount_value, minimum_shares, status)
select id, 'Experience benefit', 'experience', 'Demo record for UI testing; verify official eligibility before use.', 'Japan', 'Tokyo', 'Tokyo', 'discount', 45, 1, 'demo' from companies where ticker='DIS';
insert into shareholder_benefits (company_id, title, category, description, country, city, location, benefit_type, discount_value, minimum_shares, status)
select id, 'Shopping benefit', 'shopping', 'Demo record for UI testing; verify official eligibility before use.', 'Japan', 'Tokyo', 'Tokyo', 'discount', 30, 1, 'demo' from companies where ticker='AIR';
