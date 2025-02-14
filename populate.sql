-- Setze Client-Encoding auf UTF-8
SET client_encoding = 'UTF8';

-- Beispiel-Dokumente einfügen (ohne Embeddings zunächst)
INSERT INTO documents (client_id, content, metadata) VALUES 
('phobo', E'Phobo ist eine Webdesign-Agentur in Mülheim an der Ruhr. Wir bieten Webdesign, Webentwicklung und SEO-Optimierung an.', '{"type": "company_info"}'::jsonb),
('phobo', E'Unsere Webdesign-Preise beginnen bei 2.000€ für eine Basic-Website. Individuelle Angebote erstellen wir gerne nach Ihren Anforderungen.', '{"type": "pricing"}'::jsonb),
('phobo', E'Wir entwickeln responsive Websites mit modernen Technologien wie React, Next.js und Tailwind CSS.', '{"type": "services"}'::jsonb),
('phobo', E'Kontaktieren Sie uns über Whatsapp oder telefonisch unter +49 1637516883.', '{"type": "contact"}'::jsonb),

-- Grundlegende Informationen
('phobo', E'Phobo wurde von Han Hoa Huynh gegründet, einem erfahrenen Diplom-Medieninformatiker mit über 20 Jahren Expertise in der Webentwicklung.', '{"type": "company_info"}'::jsonb),
('phobo', E'Unser Team ist mehrsprachig und kommuniziert in Deutsch, Englisch, Koreanisch, Japanisch, Chinesisch und Vietnamesisch.', '{"type": "team_info"}'::jsonb),

-- Dienstleistungen und Technologien
('phobo', E'Wir bieten maßgeschneiderte Fullstack-Applikationen mit React.js, Vue.js, Node.js und Tailwind.css. Diese Technologien ermöglichen schnellere Ladezeiten und bessere Benutzererfahrung als traditionelle WordPress-Lösungen.', '{"type": "services"}'::jsonb),
('phobo', E'Unsere SEO-Optimierungsdienste umfassen On-Page-Optimierung, Keyword-Recherche und technische SEO, um Ihre Sichtbarkeit zu erhöhen und mehr Traffic zu generieren.', '{"type": "services"}'::jsonb),

-- Projektinformationen
('phobo', E'Die Entwicklung einer Website dauert in der Regel zwischen 4 und 12 Wochen, abhängig von der Komplexität. Einfache Websites sind bereits ab 2.000 Euro erhältlich.', '{"type": "project_info"}'::jsonb),
('phobo', E'Wir bieten umfassende Wartungsdienste an und ermöglichen es Ihnen, Inhalte selbst zu aktualisieren. Nach dem Launch sind Änderungen jederzeit möglich.', '{"type": "services"}'::jsonb),

-- Zielgruppe und Spezialisierung
('phobo', E'Wir sind spezialisiert auf kleine und mittelständische Unternehmen (KMUs) wie Handwerker, Elektriker, Händler, Nagelstudios, Rechtsanwälte, Steuerberater und Immobilienmakler.', '{"type": "target_group"}'::jsonb),

-- Kontakt und Support
('phobo', E'Für eine Beratung oder ein individuelles Angebot besuchen Sie bitte unsere Anfrage-Seite unter /de/requestservice.', '{"type": "contact"}'::jsonb),

-- Team-Informationen
('phobo', E'Han Hoa Huynh ist ein ausgebildeter Medieninformatiker (Fachhochschule Osnabrück) mit über 20 Jahren Erfahrung im Webdesign. Er gründete Phobo mit dem Ziel, innovative und effiziente Lösungen für kleine und mittelständische Unternehmen anzubieten. Er spricht Deutsch, Englisch, Vietnamesisch und Kantonesisch.', '{"type": "team_member", "role": "CEO"}'::jsonb),

('phobo', E'Hai Pham ist ein erfahrener Softwareentwickler mit Schwerpunkt auf React und Node.js. Seine Leidenschaft für Frontend-Entwicklung und User Experience (UX) ermöglicht es ihm, ansprechende und benutzerfreundliche Lösungen zu schaffen. Mit seiner Expertise in der IT-Projektplanung sorgt er für effiziente Projektumsetzung. Er spricht Deutsch, Englisch und Vietnamesisch.', '{"type": "team_member", "role": "developer"}'::jsonb),

('phobo', E'Sergio M Seki ist ein erfahrener Personalvermittler und Projektmanager mit über 6 Jahren Erfahrung in der Rekrutierung. Mit einem MBA-Abschluss vom New York Institute of Technology und Expertise in internationaler Personalvermittlung versteht er es, die richtigen Talente zu finden. Er spricht Deutsch, Englisch, Koreanisch, Japanisch und Chinesisch.', '{"type": "team_member", "role": "recruiter"}'::jsonb),

-- Allgemeine Team-Information bleibt
('phobo', E'Unser Team besteht aus erfahrenen Experten: Han Hoa Huynh (Gründer & CEO), Hai Pham (Softwareentwickler) und Sergio M Seki (Personalvermittler & Projektmanager).', '{"type": "team_info"}'::jsonb),

-- USPs
('phobo', E'Unsere Stärken sind: Individuelle Lösungen, jahrelange Erfahrung, garantierte Kundenzufriedenheit, hohe Qualitätsstandards und der Einsatz innovativer Technologien.', '{"type": "usp"}'::jsonb); 