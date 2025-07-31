-- Create test users if they don't exist
-- Note: This will only work if we have access to create users directly
-- Otherwise, users need to be created via the Supabase Auth UI

-- Check if test users exist and create profiles if missing
DO $$
DECLARE
    basic_user_id uuid;
    prof_user_id uuid;
    ent_user_id uuid;
BEGIN
    -- Try to find existing users by email in auth.users
    -- If they exist, ensure they have profiles
    
    -- Check for basic user
    SELECT id INTO basic_user_id FROM auth.users WHERE email = 'admin.basico@teste.com' LIMIT 1;
    IF basic_user_id IS NOT NULL THEN
        INSERT INTO public.profiles (user_id, email, plan_type, full_name)
        VALUES (basic_user_id, 'admin.basico@teste.com', 'basico', 'Administrador Básico')
        ON CONFLICT (user_id) DO UPDATE SET
            plan_type = 'basico',
            full_name = 'Administrador Básico';
    END IF;
    
    -- Check for professional user  
    SELECT id INTO prof_user_id FROM auth.users WHERE email = 'admin.profissional@teste.com' LIMIT 1;
    IF prof_user_id IS NOT NULL THEN
        INSERT INTO public.profiles (user_id, email, plan_type, full_name)
        VALUES (prof_user_id, 'admin.profissional@teste.com', 'profissional', 'Administrador Profissional')
        ON CONFLICT (user_id) DO UPDATE SET
            plan_type = 'profissional',
            full_name = 'Administrador Profissional';
    END IF;
    
    -- Check for enterprise user
    SELECT id INTO ent_user_id FROM auth.users WHERE email = 'admin.enterprise@teste.com' LIMIT 1;
    IF ent_user_id IS NOT NULL THEN
        INSERT INTO public.profiles (user_id, email, plan_type, full_name)
        VALUES (ent_user_id, 'admin.enterprise@teste.com', 'enterprise', 'Administrador Enterprise')
        ON CONFLICT (user_id) DO UPDATE SET
            plan_type = 'enterprise',
            full_name = 'Administrador Enterprise';
    END IF;
END $$;